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

//获取Schema
var Schema = mongoose.Schema;
//创建约束对象
var stuSchema = new Schema({
  name: String,
  age: Number,
  sex: String,
  phone: {
    type: String,
    unique: true,
    required: true
  },
  hobby: [String],
  info: Schema.Types.Mixed
})
//创建模型对象
var Students = mongoose.model('Students', stuSchema);

/*
  模型对象的方法： CRUD
    C -  Model.create(文档对象，回调函数)
    R - Model.find(查询条件, 投影, 回调函数)  返回值是数组
    U - Model.updateOne(查询条件，要修改的内容，配置对象，回调函数)
      - Model.updateMany(查询条件，要修改的内容，配置对象，回调函数)
    D - Model.deleteOne(查询条件，回调函数)
      - Model.deleteMany(查询条件，回调函数)
 */

Students.deleteOne({$or: [{age: 33}, {sex: '女'}]}, function (err) {
  if (!err) {
    console.log('数据删除成功');
  } else {
    console.log(err);
  }
})

/*Students.updateMany({}, {$inc: {age: 1}}, function (err) {
  if (!err) {
    console.log('数据修改成功~');
  } else {
    console.log(err);
  }
})*/

/*Students.findOne({age: {$gte: 18}, sex: '男'}, {info: 0}, function (err, data) {
  if (!err && data) {
    //返回值data是一个对象
    //如果没有找到东西，返回值data就是null
    console.log(data);
  } else {
    console.log(err);
  }
})
// Students.find({age: {$gte: 18}, sex: '男'}, {info: 0}, function (err, data) {
//   if (!err && data.length) {
//     //方法没有出错，并且返回值data永远是一个数组
//     //方法没有出错并且找到了数据
//     console.log(data);
//   } else {
//     //方法出错了或者没有找到数据
//     console.log(err);
//   }
// })*/

/*
Students.create({
  name: '薛永利',
  age: 30,
  sex: '女',
  hobby: ['男'],
  phone: '19999999999',
  info: '薛副班长，三道杠'
}, function (err) {
  if (!err) {
    console.log('数据创建成功');
  } else {
    console.log(err);
  }
})*/
