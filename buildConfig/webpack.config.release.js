'use strict';
var webpackConfig = require('./webpack.config.base');
const Webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.module.loaders.push(
    {test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])}
);
webpackConfig.plugins.push(
    new Webpack.optimize.UglifyJsPlugin(),
    new ImageminPlugin(),
    new CompressionPlugin(),
    new ExtractTextPlugin('[name].css')
);

module.exports = webpackConfig;