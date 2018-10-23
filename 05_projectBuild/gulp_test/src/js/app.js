import {add, mul} from "./module1";
import {name, age} from "./module2";
import Person from "./module3";

console.log(add(10, 10));
console.log(mul(10, 10));
console.log(name, age);

const p = new Person('rose', 18);
console.log(p);