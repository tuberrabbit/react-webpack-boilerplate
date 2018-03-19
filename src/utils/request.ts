import fetch from 'dva/fetch';
import config from '../config';

const checkStatus = async res => {
  if (res.ok) {
    return res;
  }
  const error: any = new Error(res.statusText);
  error.body = await res.json();
  throw error;
};

const request = async (url, opts = {}) => {
  const defaultOptions = {};
  const newOptions: any = { ...defaultOptions, ...opts };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT' || newOptions.method === 'PATCH') {
    newOptions.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(`${config.host}${url}`, newOptions);
  await checkStatus(res);
  return res.json();
};

export default request;
