import React, {Component} from 'react';

import Search from '../search/search';
import List from '../list/list';

class App extends Component {
  state = {
    searchName: ''
  }
  
  updateSearchName = searchName => {
    //更新状态数据
    this.setState({searchName});
  }
  
  render () {
    const {searchName} = this.state;
    return (
      <div className="container">
        <Search updateSearchName={this.updateSearchName}/>
        <List searchName={searchName}/>
      </div>
    )
  }
}

export default App;