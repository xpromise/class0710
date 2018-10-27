import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../commentItem/commentItem';
import './commentList.css';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  }
  
  render () {
    //接受父组件App通过props传递的数据
    const {comments, delComment} = this.props;
    
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {
          comments.length
            ? (<ul className="list-group">
                {
                  comments.map((comment, index) => <CommentItem comment={comment} key={index} delComment={delComment} index={index}/>)
                }
               </ul>)
            : <h2>暂无评论，点击左侧添加评论！！！</h2>
        }
      </div>
    )
  }
}

export default CommentList;