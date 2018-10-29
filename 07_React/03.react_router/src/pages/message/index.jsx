import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import MessageDetail from '../message-detail';

class Message extends Component {
  state = {
    messages: []
  }
  
  componentDidMount () {
    //模拟发送请求
    setTimeout(() => {
      //获取数据
      const messages = [
        {id: 1, content: 'message001'},
        {id: 3, content: 'message003'},
        {id: 5, content: 'message005'}
      ];
      //更新状态
      this.setState({messages})
    }, 1000)
  }
  
  goForward = () => {
    this.props.history.goForward();  //编程式导航
  }
  
  goBack = () => {
    this.props.history.goBack();
  }
  
  render () {
    const {messages} = this.state;
    return (
      <div>
        <ul>
          {
            messages.map((message, index) => (
              <li key={index}>
                <Link to={`/home/message/${message.id}`}>{message.content}</Link> {/*路由链接跳转*/}
              </li>))
          }
        </ul>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <Route path="/home/message/:id" component={MessageDetail}/>
      </div>
    )
  }
}

export default Message;