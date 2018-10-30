/*
  action是一个对象 {type: '', data: }
  通过action creators工厂函数生成action
 */
import {INCREMENT, DECREMENT} from './action-types';

//同步action creators，返回值是一个action对象
export const increment = data => ({type: INCREMENT, data});

export const decrement = data => ({type: DECREMENT, data});

//异步，返回值是一个函数
export const incrementAsync = data => {
  return dispatch => {   //返回函数中，参数必须有dispatch
    //1. 进行异步操作，ajax请求，定时器
    setTimeout(() => {
      //2. 异步工作完成后, 主动调用dispatch分发action
      dispatch(increment(data));
    }, 1000)
  }
}