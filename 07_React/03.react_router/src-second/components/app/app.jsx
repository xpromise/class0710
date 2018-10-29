import React, {Component} from 'react';
import {Route, NavLink, Link, Switch, Redirect} from 'react-router-dom';

import About from '../../pages/about';
import Home from '../../pages/home';
import MyNavLink from '../my-nav-link';

import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*<a className="list-group-item myActive" href="/about" aria-current="page">About</a>
              <a className="list-group-item" href="/home">Home</a>*/}
              {/*<NavLink className="list-group-item" activeClassName="myClass" to="/about">About</NavLink> 路由链接：修改url地址后面path路径
              <NavLink className="list-group-item" activeClassName="myClass" to="/home">Home</NavLink>*/}
              {/*<Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>*/}
              <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
              <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>  {/*切换路由组件的显示*/}
                  <Route path="/about" component={About}/>  {/*路由组件*/}
                  <Route path="/home" component={Home}/>
                  <Redirect to="/about"/>  {/*当请求路径不是/about或者/home时生效。默认访问about路由组件*/}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;