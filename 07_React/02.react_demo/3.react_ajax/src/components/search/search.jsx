import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    updateSearchName: PropTypes.func.isRequired
  }
  
  search = () => {
    //收集表单数据
    const value = this.nameInput.value.trim();
    //判断用户输入是否合法
    if (!value) return;
    //更新状态
    this.props.updateSearchName(value);
  }
  
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={input => this.nameInput = input}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

export default Search;