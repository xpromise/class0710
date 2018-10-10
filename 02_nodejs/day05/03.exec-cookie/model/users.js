var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})
//创建模型对象
var Users = mongoose.model('Users', usersSchema);
//暴露出去
module.exports = Users;