import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import Testing from './components/Testing';

render(
  <div>
    <div id="background" />
    <div id="content">
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Landing} />
          <Route path="/frontend" component={FrontEnd} />
          <Route path="/backend" component={BackEnd} />
          <Route path="/testing" component={Testing} />
        </Route>
      </Router>
    </div>
  </div>,
  document.getElementById('root')
);
