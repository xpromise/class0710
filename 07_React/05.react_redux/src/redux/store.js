import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //redux的插件，异步中间件

import count from './reducers';
//需要传递一个reducers函数, 返回值就是store对象
export default createStore(
  count,
  applyMiddleware(thunk)  //应用异步中间件
);