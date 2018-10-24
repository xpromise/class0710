import {add, mul} from "./module1";
import {name, age} from "./module2";
import Person from "./module3";
import data from "../json/data";

//引入less文件
import "../less/test1.less";
import "../less/test2.less";

console.log(add(20, 20));
console.log(mul(10, 10));
console.log(name, age);
console.log(data);

const p = new Person('rose', 18);
console.log(p);