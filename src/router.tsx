import { Route, Router } from 'dva/router';
import 'normalize.css';
import * as React from 'react';
import App from './containers/App';

export default ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App} />
  </Router>
);
