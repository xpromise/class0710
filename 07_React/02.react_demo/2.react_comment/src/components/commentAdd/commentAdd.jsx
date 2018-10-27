import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentAdd extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  
  handleSubmit = () => {
    //收集表单数据
    const username = this.usernameInput.value.trim();
    const content = this.contentInput.value.trim();
    //判断表单是否合法
    if (!username || !content) return;
    //更新app组件的状态
    this.props.addComment({username, content});
    //清空表单数据
    this.usernameInput.value = '';
    this.contentInput.value = '';
  }
  
  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={input => this.usernameInput = input} />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={input => this.contentInput = input}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentAdd;