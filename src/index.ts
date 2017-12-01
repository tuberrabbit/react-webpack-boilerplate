import dva from 'dva';
import * as _ from 'lodash-es';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import Promise from 'promise-polyfill';
import { registerModel } from './utils';
import router from './router';
import appModel from './containers/App/model';

if (typeof window !== 'undefined') {
  if (!_.isFunction(_.get(window, 'Promise'))) {
    _.set(window, 'Promise', Promise);
  }
}

const app = dva({
  history: browserHistory,
});

// register your hooks here
app.use(createLoading());

// register your models here
registerModel(app, appModel);

app.router(router);

app.start('#root');
