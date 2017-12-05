import { Route, Router } from 'dva/router';
import * as React from 'react';
import App from './containers/App';
import './styles/reset.less';

export default ({ history }) => (
  <Router history={history}>
    <Route path='/' component={App} />
  </Router>
);
