import React, {Component} from 'react';

import CommentItem from '../commentItem/commentItem';
import './commentList.css';

class CommentList extends Component {
  render () {
    //接受父组件App通过props传递的数据
    const {comments} = this.props;
    
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <CommentItem comment={comment} key={index}/>)
          }
        </ul>
      </div>
    )
  }
}

export default CommentList;