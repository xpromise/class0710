/*
容器组件
 */
import {connect} from 'react-redux';

import App from '../components/app';
import {increment, decrement, incrementAsync} from '../redux/actions';

export default connect(
  state => ({count: state}),  //添加状态属性
  {increment, decrement, incrementAsync}  //添加操作状态的方法
)(App)