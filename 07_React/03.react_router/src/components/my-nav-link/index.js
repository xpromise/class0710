/*
  工厂函数定义组件方式
 */
import React from 'react';
import {NavLink} from 'react-router-dom';

function MyNavLink(props) {
  return <NavLink {...props} activeClassName="myClass" />
}

export default MyNavLink;