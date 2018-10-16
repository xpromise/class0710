//主模块
/*
  浏览器使用：
    <script type="text/javascript" src="./libs/require.js" data-main="./app.js"></script>
    1. 引入requirejs
    2. 自定义属性data-main，值为主模块/入口文件路径
    
  特点：异步加载
 */

//配置模块路径
//requirejs和require
requirejs.config({
  baseUrl: './', //模块的公共路径
  paths: {  //配置每一个模块的具体路径
    module1: 'src/module1',   // 模块名称: 模块路径
    module2: 'src/module2',   //注意：不能加文件后缀名
    jquery: 'libs/jquery-1.10.1',
    math: 'src/module3'
  }
})

//应用其他模块
requirejs(['jquery', 'math'], ($, math) => {
  console.log('主模块运行了~');
  $('body').css('background', 'pink');
  console.log(math(2, 5));
  //按需加载
  $('#btn').click(() => {
    requirejs(['module2'], m2 => {
      m2();
    })
  })
})

console.log('***********');