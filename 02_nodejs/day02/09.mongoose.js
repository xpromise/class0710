//引入mongoose模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true});
//绑定事件监听
mongoose.connection.once('open', function (err) {
  if (!err) {
    console.log('数据库连接成功了~');
  } else {
    console.log(err);
  }
})
//创建集合
//创建集合的约束对象

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
  info: Schema.Types.Mixed   //混合，所有类型都允许
});
//通过约束对象创建集合，模型对象
/*
   mongoose.model('集合名称', 约束对象);
   - 集合名称最好是复数形式
 */
var Students = mongoose.model('Students', studentsSchema);
//通过模型对象来创建文档对象
var s = new Students({
  name: '薛永利',
  age: 30,
  sex: '女',
  hobby: ['男'],
  phone: '18888888888',
  info: '薛副班长，三道杠'
})
//保存在数据库中
s.save(function (err) {
  if (!err) {
    console.log('数据保存成功');
  } else {
    console.log(err);
  }
})