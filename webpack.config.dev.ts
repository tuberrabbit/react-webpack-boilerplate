import * as webpack from 'webpack';
import * as path from 'path';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const sourcePath = path.resolve(__dirname, 'src');
const modulePath = path.resolve(__dirname, 'node_modules');
const targetPath = path.resolve(__dirname, 'dist');
const config = {
    entry: {
      app: './src/index.ts',
      vendor: ['object-assign', 'jquery', 'dva-loading', 'crypto', 'dva',
        'react-dnd-html5-backend', 'path-to-regexp', 'qs', 'react-collapse', 'react-countup', 'react-dnd',
        'simditor', 'simditor-fullscreen', 'socket.io-client', 'recharts'],
    },
    devtool: 'inline-source-map',
    devServer: {
      noInfo: true,
      historyApiFallback: true,
      hot: true,
      disableHostCheck: true,
    },
    output: {
      path: targetPath,
      publicPath: '/',
      filename: '[name].[hash:8].js',
    },
    resolve: {
      extensions: ['.ts', '.js', '.json', '*'],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg|eot|ttf|woff|woff2|otf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'res/[ext]/[name].[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(js)$/,
          include: sourcePath,
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }],
        },
        {
          test: /\.(ts)$/,
          include: sourcePath,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                useBabel: true,
                useCache: true,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          include: sourcePath,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
                importLoaders: 1,
              },
            },
            'less-loader',
          ],
        },
        {
          test: /\.css$/,
          include: sourcePath,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: modulePath,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: 2,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 1000,
      }),
      new HtmlWebpackPlugin({
        title: 'My boilerplate',
        template: path.resolve(__dirname, 'src', 'index.ejs'),
        favicon: path.resolve(__dirname, 'src', 'assets', 'favicon.ico'),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    bail: true,
  }
;

export default config;
