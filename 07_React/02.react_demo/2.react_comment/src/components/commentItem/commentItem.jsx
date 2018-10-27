import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './commentItem.css';

class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    delComment: PropTypes.func.isRequired,
  }
  
  handleDel = () => {
    //提示
    if (window.confirm(`你确定要删除${this.props.comment.username}评论吗？`)) {
      //获取当前删除元素的下标
      const {index, delComment} = this.props;
      //删除
      delComment(index);
    }
  }
  
  render () {
    //接受props传递的属性
    const {username, content} = this.props.comment;
    
    return (
      <li className="list-group-item">
        <div className="handle">
          <a onClick={this.handleDel}>删除</a>
        </div>
        <p className="user"><span>{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}

export default CommentItem;