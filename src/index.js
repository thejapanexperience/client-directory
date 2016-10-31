import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout';


render(
  <div>
    <div id="background" />
    <div id="content">
      <Router history={browserHistory}>
        <Route path="/" component={Layout} />
      </Router>
    </div>
  </div>,
  document.getElementById('root')
);
