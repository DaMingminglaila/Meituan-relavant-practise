function pv(ctx){
  // 表示当前客户访问的次数
  ctx.session.count++
  global.console.log('pv',ctx.path)
}

module.exports=function(){
  return async function(ctx,next){
    pv(ctx)
    await next()
  }
}
