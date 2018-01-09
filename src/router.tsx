import { Route, Router, Switch } from 'dva/router';
import 'normalize.css';
import * as React from 'react';
import NotFound from './components/NotFound';
import App from './containers/App';

export default ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
