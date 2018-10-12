var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ajax', {useNewUrlParser: true});
mongoose.connection.once('open', function (err) {
  if (!err) console.log('数据库连接成功了~');
  else console.log(err);
})