//引入依赖
import React, {Component} from 'react';
import logo from './logo.svg';

//引入样式
import './App.css';

//定义组件
class App extends Component {
  render () {
    return (
      <div>
        <h2>第一个React脚手架项目</h2>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}

//暴露组件
export default App;