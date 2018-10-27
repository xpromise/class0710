import React, {Component} from 'react';

import CommentAdd from '../commentAdd/commentAdd';
import CommentList from '../commentList/commentList';

//定义组件
class App extends Component {
  state = {
    comments: [
      {
        username: 'Jack',
        content: 'hello rose'
      },
      {
        username: 'Rose',
        content: 'hi jack'
      },
      {
        username: '薛永利',
        content: 'jack & rose'
      }
    ]
  }
  
  //添加评论内容方法
  addComment = comment => {
    //获取当前状态数据
    const {comments} = this.state;
    //添加数据
    comments.unshift(comment);
    //更新状态
    this.setState({comments});
  }
  
  //删除数据方法
  delComment = index => {
    //获取当前状态数据
    const {comments} = this.state;
    //删除数据
    comments.splice(index, 1);
    //更新状态
    this.setState({comments});
  }
  
  render () {
    //获取状态数据
    const {comments} = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment}/>
          <CommentList comments={comments} delComment={this.delComment}/>
        </div>
      </div>
    )
  }
}

//暴露组件
export default App;