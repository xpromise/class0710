/*
  此模块用来创建模型对象
 */
//引入mongoose模块
var mongoose = require('mongoose');
//获取模式对象
var Schema = mongoose.Schema;
//通过模式对象，就能创建集合的约束对象
var studentsSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  hobby: [String],
  phone: {
    type: String,
    unique: true,    //唯一的
    required: true   //必须填写
  },
  info: Schema.Types.Mixed,   //混合，所有类型都允许
  createTime: {
    type: Date,
    default: Date.now()
  },
  updateTime: {  //记录最新的/上一次的修改时间
    type: Date,
    default: Date.now()
  }
});
//预设
//每次文档对象被修改时，都会触发此事件，执行回调函数
studentsSchema.pre('save', function (next) {
  // this 被修改的文档对象
  if (!this.isNew) {
    this.updateTime = Date.now();
  }
  next();  //调用堆栈中的下一个中间件
})

//通过约束对象创建集合，模型对象
var Students = mongoose.model('Students', studentsSchema);

//暴露模型对象出去
module.exports = Students;
