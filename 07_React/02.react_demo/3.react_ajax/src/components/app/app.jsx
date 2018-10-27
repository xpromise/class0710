import React, {Component} from 'react';

import Search from '../search/search';
import List from '../list/list';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}

export default App;