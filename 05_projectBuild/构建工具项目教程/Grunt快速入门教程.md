* Grunt介绍
  * 中文主页 : http://www.gruntjs.net/
  * 是一套前端**自动化构建**工具，一个基于nodeJs的命令行工具
  * 它是一个**任务运行器**, 配合其丰富强大的**插件**
  * 常用功能:
    * **合并文件**(js/css)
    * **压缩文件**(js/css)
    * **语法检查**(js)
    * **less/sass预编译处理** 
    * 其它...
* 安装nodejs, 查看版本
  ```
  node -v
  ```
* 创建一个简单的应用grunt_test
  ```
  |- build----------构建生成的合并后文件所在的文件夹
  |- dist-----------构建生成的压缩文件所在的文件夹
  |- src------------源码文件夹
      |- js---------------js源文件夹
      |- less-------------less源文件夹
      |- index.html-----页面文件
  |- Gruntfile.js---grunt配置文件(注意首字母大写)
  |- package.json---项目包配置文件
      {
        "name": "grunt_test",
        "version": "1.0.0"   
      }
  ```  
* 全局安装 grunt-cli
  ```
  npm install -g grunt-cli 
  ```
* 安装grunt
  ```
  npm install grunt --save-dev
  
  ```
* 运行构建项目命令
  ```
  grunt  //提示 Warning: Task "default" not found
  ```
* 配置文件: Gruntfile.js
  * 此配置文件本质就是一个node函数类型模块
  * 配置编码包含3步:
    1. 初始化插件配置
    2. 加载插件任务
    3. 注册构建任务
  * 基本编码:
    ```
    module.exports = function(grunt){
      // 1. 初始化插件配置
      grunt.initConfig({
          //主要编码处
      });
      // 2. 加载插件任务
      // grunt.loadNpmTasks('grunt-contrib-concat');
      // 3. 注册构建任务
      grunt.registerTask('default', []);
    };
    ```
  * 命令: grunt  //提示成功, 但没有任何效果(还没有使用插件定义任务)
* Grunt插件介绍
  * grunt官网的插件列表页面 http://www.gruntjs.net/plugins 
  * 插件分类:
    * grunt团队贡献的插件 : 插件名大都以contrib-开头
    * 第三方提供的插件 : 大都不以contrib-开头
  * 常用的插件:
    * grunt-contrib-clean——清除文件(打包处理生成的)
    * grunt-contrib-concat——合并多个文件的代码到一个文件中
    * grunt-contrib-uglify——压缩js文件
    * grunt-contrib-jshint——javascript语法错误检查；
    * grunt-contrib-cssmin——压缩/合并css文件
    * grunt-contrib-htmlmin——压缩html文件
    * grunt-contrib-imagemin——压缩图片文件(无损)
    * grunt-contrib-copy——复制文件、文件夹
    * grunt-contrib-watch——实时监控文件变化、调用相应的任务重新执行
* 合并js: 使用concat插件
  * 命令:
    ```
    npm install grunt-contrib-concat --save-dev
    ```
  * 编码:
    * src/js/test1.js
      ```
      (function () {
        function add(num1, num2) {
          return num1 + num2;
        }
        console.log(add(10, 20));
      })();
      ```
    * src/js/test2.js
      ```
      (function () {
        var arr = [2,3,4].map(function (item, index) {
          return item+1;
        });
        console.log(arr);
      })();
      ```
  * 配置: Gruntfile.js
    * 配置任务:
       ```
       concat: {
         options: { //可选项配置
           separator: ';'   //使用;连接合并
         },
         build: { //此名称任意
           src:  ["src/js/*.js"],  //合并哪些js文件
           dest: "build/js/built.js" //输出的js文件
         }
       }
       ```
    * 加载插件:
      ```
      grunt.loadNpmTasks('grunt-contrib-concat');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['concat']);
      ```
    * 命令: 
      ```
      grunt   //会在build下生成一个built.js
      ```
* 压缩js: 使用uglify插件
  * 下载
    ```
    npm install grunt-contrib-uglify --save-dev
    ```
  * 配置: Gruntfile.js
    * 配置任务:
      ```
      pkg : grunt.file.readJSON('package.json'),
      uglify : {
        options: {  //不是必须的
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        dist: {
          files: {
            'dist/js/built-<%=pkg.name%>-<%=pkg.version%>.min.js': ['build/js/built.js']
          }
        }
      }
      ```
    * 加载任务:
      ```
      grunt.loadNpmTasks('grunt-contrib-uglify');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['concat', 'uglify']);
      ```
    * 命令: 
      ```
      grunt   //会在dist下生成一个压缩的js文件
      ```
* es6-es5语法转换: 使用babel插件
  * 命令:
    ```
    npm install grunt-babel babel-core babel-preset-es2015 --save-dev
    ```
  * 修改src/js/test1.js
    ```
    (() => {
      function add(num1, num2) {
        return num1 + num2;
      }
      console.log(add(10, 20));
    })();
    ```
  * 配置 : Gruntfile.js
    * 配置任务:
      ```
      babel: {
        options: {
          sourceMap: false,
          presets: ['babel-preset-es2015']
        },
        dist: {
          files: [{
            expand:true,     //如果设为true，就表示下面文件名的占位符（即*号）都要扩展成具体的文件名。
            cwd:'src/',      //js目录下
            src:['**/*.js'], //所有js文件
            dest:'build/'    //输出到此目录下
          }]
        }
       }
      ```
    * 加载任务:
      ```
      grunt.loadNpmTasks('grunt-babel');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['babel', 'concat', 'uglify']);
      ```
    * 命令:
      ```
      grunt   //提示变量未定义和语句后未加分号 -->修改后重新编译
      ```
* js语法检查: 使用jshint插件
  * 命令: 
    ```
    npm install grunt-contrib-jshint --save-dev
    ```
  * 配置文章: https://www.jianshu.com/p/4cb23f9e19d3

  * 修改src/js/test1.js
    ```
    (function () {
      function add(num1, num2) {
        num1 = num1 + num3
        return num1 + num2;
      }
      console.log(add(10, 20));
    })();
    ```
  * 配置 : Gruntfile.js
    * 配置任务:
      ```
      jshint : {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          esversion: 6,
          globals: {
            jQuery: true
          },
        },
        all : ['Gruntfile.js', 'src/js/*.js'] //指定检查的文件
      }
      ```
    * 加载任务:
      ```
      grunt.loadNpmTasks('grunt-contrib-jshint');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['jshint', 'babel', 'concat', 'uglify']);
      ```
    * 命令: 
      ```
      grunt   //提示变量未定义和语句后未加分号 -->修改后重新编译
      ```
* 使用less插件
  * 安装:
    ```
    npm install grunt-contrib-less less-plugin-autoprefix --save-dev
    ```
  * 编码:
    * test1.less
      ```
      #box1 {
        width: 100px;
        height: 100px;
        background: pink;
        p {
          color: white;
          display: flex;
        }
      }
      ```
    * test2.css
      ```
      #box2 {
        width: 200px;
        height: 200px;
        background: deeppink;
        p {
          color: darkblue;
        }
      }
      ```
    * index.html
      ```
      <link rel="stylesheet" href="build/css/built.css">
      <div id="box1">
        <p>hello atguigu</p>
      </div>
      <div id="box2">
        <p>hello grunt</p>
      </div>
      ```
  * 配置 : Gruntfile.js
    * 配置任务:
      ```
      less: {
        production: {
          options: {
            paths: ['src/less'],
            plugins: [
              new (require('less-plugin-autoprefix'))({browsers: ["last 2 version"]})
            ]
          },
          files: {
            'build/css/built.css': 'src/less/*.less'
          }
        }
      }
      ```
    * 加载任务:
      ```
      grunt.loadNpmTasks('grunt-contrib-less');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['jshint', 'babel', 'concat', 'uglify', 'less']);
      ```
    * 命令:
      ```
      grunt    //在build/css/下生成built.css
      ```
* 使用cssmin插件
  * 安装:
    ```
    npm install grunt-contrib-cssmin --save-dev
    ```
  * 配置 : Gruntfile.js
    * 配置任务:
      ```
      cssmin:{
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        build: {
          files: {
              'dist/css/dist.min.css': ['src/css/*.css']
          }
        }
      }
      ```
    * 加载任务:
      ```
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['jshint', 'babel', 'concat', 'uglify', 'less', 'cssmin']);
      ```
    * 命令: 
      ```
      grunt    //在build/css/下生成output.min.css
      ```
* 使用htmlmin插件
  * 安装:
    ```
    npm install grunt-contrib-htmlmin --save-dev
    ```
  * 编码:
    * index.html
      ```
      <link rel="stylesheet" href="css/dist.min.css">
      ```
  * 配置 : Gruntfile.js
    * 配置任务:
      ```
      htmlmin: {
        dist: {
          options: {
            removeComments: true,  //移除注释
            collapseWhitespace: true   //去除多余空格
          },
          files: {
            'build/index.min.html': 'index.html'
          }
        }
      }
      ```
    * 加载任务:
      ```
     grunt.loadNpmTasks('grunt-contrib-htmlmin');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['jshint', 'babel', 'concat', 'uglify', 'less', 'cssmin', 'htmlmin']);
      ```
    * 命令:
      ```
      grunt    //dist/下生成index.min.html
      ```
* 使用watch插件（真正实现自动化） 
  * 命令: npm install grunt-contrib-watch --save-dev
  * 配置 : Gruntfile.js
  
    * 配置任务:
      ```
      watch: {
        less: {
          files: ['src/less/*.less'],
          tasks: ['less', 'cssmin'],
        },
        scripts: {
          files: ['src/js/*.js'],
          tasks: ['concat', 'uglify', 'jshint'],
          options: {
            spawn: false,   //加快任务速度
          },
        }
      }
      ```
    * 加载任务:
      ```
      grunt.loadNpmTasks('grunt-contrib-watch');
      ```
    * 注册任务:
      ```
      grunt.registerTask('default', ['jshint', 'babel', 'concat', 'uglify', 'less', 'cssmin', 'htmlmin', 'watch']);
      改进：grunt.registerTask('myWatch', ['default','watch']);
      ```
    * 命令: 
      ```
      grunt   //控制台提示watch已经开始监听, 修改保存后自动编译处理
      ```
