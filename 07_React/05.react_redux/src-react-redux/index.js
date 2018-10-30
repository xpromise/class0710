import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Counter from './containers/counter';
import store from './redux/store';


ReactDOM.render((
  /*重新渲染组件，将store对象传入到子组件中*/
  <Provider store={store}>
    <Counter />
  </Provider>
), document.getElementById('app'));
