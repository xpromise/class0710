import React, {Component} from 'react';

import './commentItem.css';

class CommentItem extends Component {
  render () {
    //接受props传递的属性
    const {username, content} = this.props.comment;
    
    return (
      <li className="list-group-item">
        <div className="handle">
          <a>删除</a>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}

export default CommentItem;