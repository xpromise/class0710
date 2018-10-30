/*
  reducers函数： 根据preState和action产生一个新的state
 */
import {INCREMENT, DECREMENT} from './action-types';
const initState = 0;
//reducers函数的名称通过就与要管理的状态一致
function count(preState = initState, action) {
  //preState = 0默认值：初始化显现会读取默认值
  console.log('count() :', preState, action);
  switch (action.type) {
    case INCREMENT :
      return preState + action.data;
    case DECREMENT :
      return preState - action.data;
    default:
      return preState;  //在组件初次渲染时触发调用
  }
}

export default count;
