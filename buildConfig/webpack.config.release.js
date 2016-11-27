'use strict';
var webpackConfig = require('./webpack.config.base');
const Webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CompressionPlugin = require("compression-webpack-plugin");

webpackConfig.plugins.push(
    new Webpack.optimize.UglifyJsPlugin(),
    new ImageminPlugin(),
    new CompressionPlugin()
);

module.exports = webpackConfig;