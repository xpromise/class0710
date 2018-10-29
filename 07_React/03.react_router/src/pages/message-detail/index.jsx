import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageDetail extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }
  
  state = {
    messages: [
      {id: 1, title: 'message001', content: 'message001 content'},
      {id: 3, title: 'message003', content: 'message003 content'},
      {id: 5, title: 'message005', content: 'message005 content'},
    ]
  }
  
  render () {
    //获取到path传递过来的id值
    const {id} = this.props.match.params;
    
    const message = this.state.messages.find(item => item.id === +id);
    
    return (
      <ul>
        <li>id: {message.id}</li>
        <li>Title: {message.title}</li>
        <li>Content: {message.content}</li>
      </ul>
    )
  }
}

export default MessageDetail;