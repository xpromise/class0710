import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import store from './redux/store';

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
}
//初始化渲染
render();

//一旦store中的状态发生变化，就会触发设置的回调函数，重新渲染组件
/*
store.subscribe(() => {
  render();
})
*/
store.subscribe(render);