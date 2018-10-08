//引入http模块
var http = require('http');
//querystring模块用来解析查询字符串
var querystring = require('querystring');
//通过http模块创建服务
var server = http.createServer(function (request, response) {
  /*
    request / req 请求信息   客户端发送的请求信息
    response / res 响应信息  服务端响应给客户端的内容
   */
  /*
    访问服务器：
      http://localhost:3000
      http://localhost:3000?username=sunwukong&password=123123
        ?username=sunwukong&password=123123 查询字符串（请求参数）
   */
  var queryString = request.url;
  console.log(queryString); // /?username=sunwukong&password=123123
  queryString = queryString.split('?')[1];
  console.log(queryString); // username=sunwukong&password=123123
  queryString = querystring.parse(queryString);
  console.log(queryString); // { username: 'sunwukong', password: '123123' }
  //解决乱码问题
  response.setHeader('Content-Type', 'text/html;charset=utf8');
  //返回响应给客户端
  response.end('<h1>这是node原生服务器响应的内容~~~' + queryString.username + '</h1>');
})
//通过server监听端口号
server.listen(3000, function (err) {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})