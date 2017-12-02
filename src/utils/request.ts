import fetch from 'dva/fetch';
import config from '../config';

const checkStatus = res => {
  if (res.ok) {
    return res;
  }
  const error: any = new Error(res.statusText);
  error.response = res;
  throw error;
};

const request = async (url, opts = {}) => {
  const res = await fetch(`${config.host}${url}`, opts);
  checkStatus(res);
  return res.json();
};

export default request;
