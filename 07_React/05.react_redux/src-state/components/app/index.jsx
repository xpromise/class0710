import React, {Component} from 'react';

//定义组件
class App extends Component {
  state = {
    count: 0
  }
  
  increment = () => {
    //获取select值
    const {value} = this.select;
    //获取当前状态
    let {count} = this.state;
    //更新状态
    this.setState({
      count: count + +value
    })
  }
  
  decrement = () => {
    //获取select值
    const {value} = this.select;
    //获取当前状态
    let {count} = this.state;
    //更新状态
    this.setState({
      count: count - +value
    })
  }
  
  incrementIfOdd = () => {
    //获取select值
    const {value} = this.select;
    //获取当前状态
    let {count} = this.state;
    //判断是否为奇数
    if (count % 2 === 0) return;
    //更新状态
    this.setState({
      count: count + +value
    })
  }
  
  incrementAsync = () => {
    //获取select值
    const {value} = this.select;
    //获取当前状态
    let {count} = this.state;
    setTimeout(() => {
      //更新状态
      this.setState({
        count: count + +value
      })
    }, 1000)
  }
  
  render () {
    const {count} = this.state;
    return (
      <div>
        <h2>click {count} times</h2>
        <select ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button> &nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

//暴露组件
export default App;