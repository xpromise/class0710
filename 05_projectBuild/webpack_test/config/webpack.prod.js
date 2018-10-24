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
//清除指定目录下文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
//提取css成单独文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    filename: './js/[name].[hash:7].js', //输出的文件名称
    path: resolve(__dirname, '../dist')  //输出文件的路径
  },
  //loader
  module: {
    rules: [
      /*{  //用来处理less文件的loader   style-loader css-loader less-loader less
        test: /\.less$/,  //检测指定文件的正则
        use: [{   //loader执行顺序从右往左 / 从后往前同步执行
          loader: "style-loader" // 会生成一个style标签应用css样式
        }, {
          loader: "css-loader" // 将css转化成commonjs语法，添加到js代码中
        }, {
          loader: "less-loader" // 将less编译成css
        }]
      },*/
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
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
      {   //语法检查  jshint  jshint-loader
        test: /\.js$/, // 涵盖 .js 文件
        enforce: "pre", // 预先加载好 jshint loader
        exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
        use: [
          {
            loader: "jshint-loader",
            options: {
              // 查询 jslint 配置项，请参考 http://www.jshint.com/docs/options/
              // 例如
              camelcase: true,
              //jslint 的错误信息在默认情况下会显示为 warning（警告）类信息
              //将 emitErrors 参数设置为 true 可使错误显示为 error（错误）类信息
              emitErrors: true,
              //jshint 默认情况下不会打断webpack编译
              //如果你想在 jshint 出现错误时，立刻停止编译
              //请设置 failOnHint 参数为true
              failOnHint: true,
              esversion: 6,    // 声明使用es6语法
              undef: true,     // 禁止使用全局未定义的变量
              globals: {
                console: true   //声明全局变量
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  //以传入的html文件为模板，创建新的html文件, 并且自动引入js和css
    }),
    new CleanWebpackPlugin('dist', {  //清除dist目录下的文件
      root: resolve(__dirname, '../')   //配置根路径
    }),
    new ExtractTextPlugin("./css/[name].[hash:7].css"), //提取css成单独文件
  ],
}