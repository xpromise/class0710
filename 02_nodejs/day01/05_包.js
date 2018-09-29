/*
  通过npm能去下载，搜索、删除包
    1. npm install/i xxx  ===  npm i xxx --save  === npm i xxx -S
      - 在当前目录下创建node_modules文件夹，将包下载到文件夹中
      - 在当前目录下创建package-lock.json文件，它是用来做缓存，让后面的下载更快
      - 自动添加到package.json中的生产依赖中
   2. npm i xxx --save-dev === npm i xxx -D
    - 自动添加到package.json中的开发依赖中
   3. npm i
    - 自动将package.json所有的依赖（开发和生产）全部下载下来
   4. npm remove/r xxx
    - 删除包和相关的依赖
   5. npm i xxx -g
    - 全局安装一个包(可以在cmd中运行指令)
   6. npm init
    - 初始化一个包描述文件 package.json
    - 包名：
      - 不允许现有的包名重复
      - 不允许有中文字符
      - 只能有_
 */

var math = require('math');
var fs = require('fs');

console.log(math.add(2, 3));
console.log(math.mul(2, 3));
console.log(fs);

