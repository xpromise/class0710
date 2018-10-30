
import {createStore} from 'redux';

import count from './reducers';
//需要传递一个reducers函数, 返回值就是store对象
export default createStore(count);