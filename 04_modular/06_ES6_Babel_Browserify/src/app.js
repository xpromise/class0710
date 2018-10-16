/*
  引入依赖模块
    import
    
    es6模块化语法现在不被服务器端和浏览器端识别，所以需要借助工具编译
      1. babel  专门用来语法转换（es6 --> es5）
        使用babel将es6的模块化语法编译成es5以下的语法（commonjs语法）
        - 全局安装babel   npm i babel-cli -g
        - 下载 npm install --save-dev babel-cli babel-preset-env
        - 创建一个运行控制文件 .babelrc
          {
            "presets": ["env"]
          }
      2. browserify 将commonjs语法编译成浏览器能识别的语法
      
      1. babel src -d build
      2. browserify build/app.js -o dist/dist.js
      3. 在package.json中配置scripts
        "build": "babel src -d build && browserify build/app.js -o dist/dist.js"
      4. 运行指令 npm run build
 */

//统一暴露和分别暴露是一样的引入规则
// import 对象的解构赋值 from 模块的路径（和commonjs一样）
import {add, msg} from './module1';
import {foo1, foo2} from './module2';
//默认暴露的引入规则: 直接写暴露内容的名称
import Person from './module3';


console.log(add(10, 20));
console.log(add(20, 20));
console.log(msg);

foo1();
foo2();

const p = new Person('jack');
console.log(p);