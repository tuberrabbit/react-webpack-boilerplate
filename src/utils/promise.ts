import * as _ from 'lodash';
import Promise from 'promise-polyfill';
import { isBrowser } from './browser';

(() => {
  if (!isBrowser()) {
    return;
  }
  if (!_.isFunction(_.get(window, 'Promise'))) {
    _.set(window, 'Promise', Promise);
  }
})();
