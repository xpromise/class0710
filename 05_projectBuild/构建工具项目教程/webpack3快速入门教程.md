## webpack快速入门教程
### 1、了解Webpack相关
	* 什么是webpack
	    * Webpack是一个模块打包器(bundler)。
	    * 在Webpack看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理
	    * 它将根据模块的依赖关系进行静态分析，生成对应的静态资源
    * 四个核心概念
        * Entry：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
        * Output：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
        * Loader：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析 JavaScript）。
        * Plugins：插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
	* 理解Loader
    	* Webpack 本身只能加载JS/JSON模块，如果要加载其他类型的文件(模块)，就需要使用对应的loader 进行转换/加载
	    * Loader 本身也是运行在 node.js 环境中的 JavaScript 模块
	    * 它本身是一个函数，接受源文件作为参数，返回转换的结果
	    * loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。
	* 理解Plugins
		* 插件件可以完成一些loader不能完成的功能。
		* 插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。
		* CleanWebpackPlugin: 自动清除指定文件夹资源
		* HtmlWebpackPlugin: 自动生成HTML文件并
		* UglifyJSPlugin: 压缩js文件
	* 配置文件(默认)
    	* webpack.config.js : 是一个node模块，返回一个 json 格式的配置信息对象
	
### 2、学习文档 : 
  * webpack官网: http://webpack.github.io/
  * webpack3文档(英文): https://webpack.js.org/
  * webpack3文档(中文): https://doc.webpack-china.org/

### 3、开启项目
  * 初始化项目：
	  * 生成package.json文件
	  * 
	  ```   
	  {
	    "name": "webpack_test",
	    "version": "1.0.0"
	  } 
	  ```
  * 安装webpack
	- npm install webpack@3 -g  //全局安装
  - npm install webpack@3 --save-dev  //局部安装

### 4、编译打包应用
  * 创建入口src/js/ : entry.js
	- document.write("entry.js is work");
  * 创建主页面: dist/index.html
    - <script type="text/javascript" src="bundle.js"></script>
  * 编译js
    - webpack src/js/entry.js dist/bundle.js  
  * 查看页面效果

### 5、添加js/json文件
	* 创建第二个js: src/js/math.js
	    ``` 
	    export function square(x) {
	      return x * x;
	    }
	    
	    export function cube(x) {
	      return x * x * x;
	    }
	    ```
    * 创建json文件: src/json/data.json
	    ```
	    {
	      "name": "Tom",
	      "age": 12
	    }
	    ```
    * 更新入口js : entry.js
	    ```
	    import {cube} from './math'
	    import data from '../json/data.json'
	    //注意data会自动被转换为原生的js对象或者数组
	    document.write("entry.js is work <br/>");
	    document.write(cube(2) + '<br/>');
	    document.write(JSON.stringify(data) + '<br/>')
	    ```
    * 编译js:
	    ```
	    webpack src/js/entry.js dist/bundle.js
	    ```
    * 查看页面效果

### 6、使用webpack配置文件
	* 创建webpack.config.js
	    ```
	    const path = require('path'); //path内置的模块，用来设置路径。
	    
	    module.exports = {
	      entry: './src/js/entry.js',   // 入口文件
	      output: {                     // 输出配置
	        filename: 'bundle.js',      // 输出文件名
	        path: path.resolve(__dirname, 'dist')   //输出文件路径配置
	      }
	    };
	    ```
    * 配置npm命令: package.json
	    ```
	    "scripts": {
	      "build": "webpack"
	    },
	    ```
    * 打包应用
	    ```
	    npm run build
	    ```
### 7、打包css和图片文件
   * 安装样式的loader
    ```
    npm install css-loader style-loader --save-dev
    npm install file-loader url-loader --save-dev
	补充：url-loader是对象file-loader的上层封装，使用时需配合file-loader使用。
    ```
  * 配置loader
    ```
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                outputPath: 'images/', //决定输出文件的位置
                publicPath: '../images/',
                limit: 8 * 1024,  // 8kb大小以下的图片文件都用base64处理
              }
            }
          ]
        }
      ]
    }
    ```
  * 向应用中添加2张图片:
    * 小图: img/logo.png
    * 大图: img/big.jpg
    
  * 创建样式文件: src/css/test.css
    ```
    body {
      background: url('../img/logo.jpg')
    }
    ```
  * 更新入口js : entry.js
	- import '../css/test.css'
  * 添加css样式

		 #box1{
		  width: 300px;
		  height: 300px;
		  background-image: url("../image/logo.jpg");
		}
		#box2{
		  width: 300px;
		  height: 300px;
		  background-image: url("../image/big.jpg");
		}

  * index.html添加元素
  
		<div id="box1"></div>
		<div id="box2"></div>
	
  * 执行打包命令：
    ```
    npm run build
    ```
### 8、优化css
	将style样式改为link标签引入css
	* 安装插件
		npm install --save-dev extract-text-webpack-plugin
	* 引入插件（插件都需要引入）
		const ExtractTextPlugin = require("extract-text-webpack-plugin")
	* 配置Plugins
		plugins: [
	     new ExtractTextPlugin({
	       filename: 'css/[name].css'
	     })
		]
	* 修改loader
		{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: 'css-loader'
      })
    }

### 9、打包html文件
	将html文件也打包过去
	* 安装插件
		npm install --save-dev clean-webpack-plugin
	* 引入插件（插件都需要引入）
		const CleanWebpackPlugin = require('clean-webpack-plugin')
	* 配置Plugins
		new HtmlWebpackPlugin({   //html加载
	      filename: 'index.html',
	      template: 'src/index.html',
	    })

### 10、清除打包文件
	打包时将之前的文件夹清空，防止之前的文件干扰
	* 安装插件
		npm install --save-dev html-webpack-plugin
	* 引入插件（插件都需要引入）
		const HtmlWebpackPlugin = require('html-webpack-plugin');
	* 配置Plugins
		new CleanWebpackPlugin('build', {
	      root: path.resolve(__dirname, '../')
	    })
>以上就是build环境下的设置，可以生成打包后的文件
>命令配置 "build" : "webpack --config webpack.config.build.js"

### 11、自动编译打包
    * 利用webpack开发服务器工具: webpack-dev-server
    * 下载
        - npm install --save-dev webpack-dev-server
    * webpack配置
	      devServer:{//配置此静态文件服务器，可以用来预览打包后项目
		    contentBase: path.resolve(__dirname, 'dist'), //开发服务运行时的文件根目录
		    host: 'localhost', //主机地址
		    port: 8080,  //端口号
		    open: true  //是否自动打开浏览器
		  }

    * 命令配置
        - "dev": "webpack-dev-server --config webpack.config.dev.js"
    * 编译打包应用并运行
        - npm run dev
>以上就是dev环境下的设置，可以自动在内存中生成打包后的文件并打开网页检查效果，有热更新功能。

### 12、扩展css前缀
	* 下载
		npm install --save-dev postcss-loader
	* 配置文件
		* 文件名： postcss.config.js
		* 内容：
			module.exports = {
			  "plugins": {
			    "autoprefixer": {
			      "browsers": [
			        "ie >= 8",
			        "ff >= 30",
			        "chrome >= 34",
			        "safari >= 7",
			        "opera >= 23"
			      ]
			    }
			  }
			}

	* 修改loader
		{
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'postcss-loader']
          })
        }

### 13、压缩css
	* 修改loader
		{
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
              loader: 'css-loader',
              options: {
                minimize: true  //css压缩
              }
            }, 'postcss-loader',]
          })
        }

### 14、JS语法转化
	* 下载
		npm install --save-dev babel-core babel-loader babel-preset-es2015
	* 修改loader
		{
          test: /\.js$/,
          exclude: /node_modules/, //忽略文件
          loader: 'babel-loader',
          query: {
            presets: [
              require.resolve('babel-preset-es2015')
            ]
          }
        }

### 15、压缩JS
	* 下载
		npm install --save-dev uglifyjs-webpack-plugin
	* 引入plugins
		const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
	* 配置plugins
		new UglifyJsPlugin()

### 16、压缩html
	* 修改plugins
		new HtmlWebpackPlugin({   //html加载及压缩
	      filename: 'index.html',
	      template: './src/index.html',
	      minify: {
	        removeComments: true,
	        collapseWhitespace: true
	      }
	    })
>以上就是prod环境下的设置，可以生成打包、压缩、语法转换等的文件
>命令配置 "prod" : "webpack --config webpack.config.prod.js"
		
	  