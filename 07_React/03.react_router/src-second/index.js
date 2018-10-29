import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter, BrowserRouter} from 'react-router-dom';
import {HashRouter as Router} from 'react-router-dom';

import App from './components/app/app';

ReactDOM.render(
  (
    <Router>
      <App />
    </Router>
  ), document.getElementById('app'));