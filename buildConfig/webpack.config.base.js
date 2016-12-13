'use strict';
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');

const resolvePath = function (relativePath) {
    return Path.resolve(__dirname, '../', relativePath);
};

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'redux', 'whatwg-fetch', 'immutable']
    },
    output: {
        filename: '[name]?[hash].js',
        path: resolvePath('dist')
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader']}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            title: 'Welcome',
            template: resolvePath('src/index.ejs'),
            inject: true,
            favicon: resolvePath('src/res/favicon.png'),
            hash: true
        })
    ]
};