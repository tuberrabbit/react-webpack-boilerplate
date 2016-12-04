'use strict';
import express from 'express';

let server = express();
server.all('*', (req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
server.get('/dependencies', (req, res)=> res.json([{
    dependency: 'react',
    version: '15.4.1'
}, {
    dependency: 'react-redux',
    version: '4.4.6'
}, {
    dependency: 'react-router',
    version: '3.0.0'
}, {
    dependency: 'webpack',
    version: '2.1.0-beta.27'
}, {
    dependency: 'sass',
    version: '3.13.0'
}, {
    dependency: 'eslint',
    version: '3.11.0'
}, {
    dependency: 'whatwg-fetch',
    version: '2.0.1'
}]));
server.listen(5000);