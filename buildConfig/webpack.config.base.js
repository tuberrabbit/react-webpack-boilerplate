'use strict';
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
const Path = require('path');

const resolvePath = function (relativePath) {
    return Path.resolve(__dirname, '../', relativePath);
};

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    output: {
        filename: '[name].js',
        path: resolvePath('dist')
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            title: 'react-boilerplate',
            template: resolvePath('src/index.ejs'),
            inject: true,
            favicon: '',
            hash: true
        })
    ]
};