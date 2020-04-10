const mongoose = require('mongoose')
// 用schema定义和声明数据表中的字段
let personSchema = new mongoose.Schema({name: String, age: Number})

module.exports = mongoose.model('Person', personSchema)
