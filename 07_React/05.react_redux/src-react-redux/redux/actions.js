/*
  action是一个对象 {type: '', data: }
  通过action creators工厂函数生成action
 */
import {INCREMENT, DECREMENT} from './action-types';

export const increment = data => ({type: INCREMENT, data});

export const decrement = data => ({type: DECREMENT, data});
