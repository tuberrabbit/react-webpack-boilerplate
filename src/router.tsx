import * as React from 'react';
import { Router, Route } from 'dva/router';

import App from './containers/App';

export default ({ history }) =>
  <Router history={history}>
    <Route path='/' component={App} />
  </Router>;
