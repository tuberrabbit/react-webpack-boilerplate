import 'raf/polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import appModel from './containers/App/model';
import router from './router';
import { registerModel } from './utils';
import history from './utils/history';
import './utils/promise';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const app = dva({ history });

// register your hooks here
app.use(createLoading());

// register your models here
registerModel(app, appModel);

app.router(router);

app.start('#root');
