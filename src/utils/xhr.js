'use strict';
import 'whatwg-fetch';
import env from '../env/dev';

const mode = 'cors';
const get = (url)=> {
    return fetch(`${env.server}${url}`, {
        method: 'GET',
        mode
    }).then(checkStatus, networkError);
};

const post = (url, body)=> {
    return fetch(`${env.server}${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        mode
    }).then(checkStatus, networkError);
};

const put = (url, body)=> {
    return fetch(`${env.server}${url}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        mode
    }).then(checkStatus, networkError);
};

const del = (url)=> {
    return fetch(`${env.server}${url}`, {
        method: 'DELETE',
        mode
    }).then(checkStatus, networkError);
};

function checkStatus(res) {
    if (res.ok) {
        return res.json();
    }
    throw new Error(res.statusText);
}

function networkError(error) {
    throw error;
}

export default{get, post, put, del};
