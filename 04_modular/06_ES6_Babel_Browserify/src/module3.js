/*
  默认暴露: 只能暴露一个内容
    export default xxx
 */

class Person {
  constructor (name) {
    this.name = name;
  }
  setName (name) {
    this.name = name;
  }
}

export default Person;