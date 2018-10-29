import React, {Component} from 'react';

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
  
  render () {
    const {messages} = this.state;
    return (
      <ul>
        {
          messages.map((message, index) => <li key={index}>{message.content}</li>)
        }
      </ul>
    )
  }
}

export default Message;