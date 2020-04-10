const router = require('koa-router')()
const Redis = require('koa-redis')
// 引入model
const Person = require('../dbs/models/person')

const Store = new Redis().client

router.prefix('/users')

// 新加一个接口
router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// redis的两种使用场景
// 直接操作Redis，不通过session存储到redis
// hset是redis 的命令
router.get('/fix',async function(ctx){
  const st = await Store.hset('fix','name',Math.random())
  ctx.body={
    code:0
  }
})
// 数据库操作肯定是异步操作，用async来控制异步函数
router.post('/addPerson', async function(ctx) {
  // 新增实例，建立和数据库之间的连接
  // request.body是post方法使用的，query的方式是get使用的
  const person = new Person({
    name: ctx.request.body.name, 
    age: ctx.request.body.age
  })
  let code
  try {
    // 通过save就实现了增添数据的行为，Save方法在model中定义，用模型建立实例
    // 想要捕获异常，要把异步操作放在try,catch里面 
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})

// 数据库的读操作

router.post('/getPerson', async function(ctx) {
  // findone是模型的静态方法，找其中每一条
  const result = await Person.findOne({name: ctx.request.body.name})
  // 找出所有符合条件的数据，用find
  const results = await Person.find({name: ctx.request.body.name})
  // 返回结果
  ctx.body = {
    code: 0,
    result,
    results
  }
})

// 修改方法
router.post('/updatePerson',async function(ctx){
  // where也是person的静态方法
  const result = await Person.where({
    name: ctx.request.body.name
    // 这里的update就是更新
  }).update({
    age: ctx.request.body.age
  })
  ctx.body={
    code:0
  }
})

// 删除数据
router.post('/removePerson',async function(ctx){
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()

  ctx.body={
    code:0
  }
})


module.exports = router
