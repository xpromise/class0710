/*
  当执行webpack指令时，默认会在当前路径下找webpack.config.js文件，读取其中的配置
  
  全局安装和本地安装
    npm i webpack@3 -g / -D
  webpack能识别js和json文件， 运行指令 webpack 入口文件路径 输出文件路径 （webpack ./src/js/app.js ./build/js/built.js）
  引入less文件，webpack识别不了，需要借助loader解析
  定义配置文件 webpack.config.js ， 运行指令 webpack
 */
const {resolve} = require('path');

module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    filename: './js/built.js', //输出的文件名称
    path: resolve(__dirname, 'build')  //输出文件的路径
  },
  //loader
  module: {
    rules: [
      {  //用来处理less文件的loader   style-loader css-loader less-loader less
        test: /\.less$/,  //检测指定文件的正则
        use: [{   //loader执行顺序从右往左 / 从后往前同步执行
          loader: "style-loader" // 会生成一个style标签应用css样式
        }, {
          loader: "css-loader" // 将css转化成commonjs语法，添加到js代码中
        }, {
          loader: "less-loader" // 将less编译成css
        }]
      }
    ]
  }
}