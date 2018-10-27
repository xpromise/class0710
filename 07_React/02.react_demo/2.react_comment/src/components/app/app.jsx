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
          <CommentAdd />
          <CommentList comments={comments}/>
        </div>
      </div>
    )
  }
}

//暴露组件
export default App;