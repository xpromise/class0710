/*
  当执行webpack指令时，默认会在当前路径下找webpack.config.js文件，读取其中的配置
  
  全局安装和本地安装
    npm i webpack@3 -g / -D
  webpack能识别js和json文件， 运行指令 webpack 入口文件路径 输出文件路径 （webpack ./src/js/app.js ./build/js/built.js）
  引入less文件，webpack识别不了，需要借助loader解析
  定义配置文件 webpack.config.js ， 运行指令 webpack
 */
const {resolve} = require('path');
//使用插件必须引入插件模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  //入口
  entry: ['./src/js/app.js', './src/index.html'],  //将html资源导入进来
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
      },
      { //用来处理图片资源  url-loader  file-loader
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,   // 8 * 1024  将8kb以下的图片转化成base64形式
              publicPath: '../images',  // 决定引入图片url/src路径
              outputPath: './images',   //决定图片文件的输出路径
              name: '[hash:7].[ext]'  // 名字为7位的hash值 . 文件扩展名
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'  //将导入的html资源解析成webpack能识别的模块
        }
      }
    ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  //以传入的html文件为模板，创建新的html文件, 并且自动引入js和css
    }),
    new webpack.NamedModulesPlugin(),  //热模替换没办法更新插件的配置，必须以loader的方法导入指定资源
    new webpack.HotModuleReplacementPlugin()
  ],
  //启动服务器  webpack-dev-server@2
  devServer: {
    contentBase: './build',
    hot: true, //开启热模替换功能
    port: 3000,
    open: true  //自动打开浏览器
  },
}