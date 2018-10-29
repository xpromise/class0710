import React, {Component} from 'react';
import {Button, Toast} from 'antd-mobile';

//定义组件
class App extends Component {
  
  handleClick = (e) => {
    console.log(e);
    console.log(this);
    Toast.success('加载成功~~~!!!', 2);
  }
  
  render () {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>按钮</Button>
      </div>
    )
  }
}

//暴露组件
export default App;