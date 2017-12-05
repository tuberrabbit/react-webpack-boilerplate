import dva from 'dva';
import createLoading from 'dva-loading';
import * as _ from 'lodash-es';
import Promise from 'promise-polyfill';
import appModel from './containers/App/model';
import router from './router';
import { registerModel } from './utils';
import history from './utils/history';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (typeof window !== 'undefined') {
  if (!_.isFunction(_.get(window, 'Promise'))) {
    _.set(window, 'Promise', Promise);
  }
}

const app = dva({ history });

// register your hooks here
app.use(createLoading());

// register your models here
registerModel(app, appModel);

app.router(router);

app.start('#root');
