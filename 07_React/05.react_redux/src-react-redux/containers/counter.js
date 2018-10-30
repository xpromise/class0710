/*
容器组件
 */
import {connect} from 'react-redux';

import App from '../components/app';
import {increment, decrement} from '../redux/actions';

/*//将store管理的状态映射属性方式传递到UI组件中
const mapStateToProps = function (state) {
  return {
    count: state
  }
}
//将dispatch方法映射属性方式传递到UI组件中
const mapDispatchToProps = function (dispatch) {
  return {
    increment: function (value) {
      dispatch(increment(value))
    },
    decrement: function (value) {
      dispatch(decrement(value))
    }
  }
}

/!*export default connect(
  mapStateToProps,  //添加状态属性
  mapDispatchToProps  //添加操作状态的方法
)(App)*!/*/

export default connect(
  state => ({count: state}),  //添加状态属性
  {increment, decrement}  //添加操作状态的方法
)(App)