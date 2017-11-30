import * as webpack from 'webpack';
import * as path from 'path';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const sourcePath = path.resolve(__dirname, 'src');
const modulePath = path.resolve(__dirname, 'node_modules');
const targetPath = path.resolve(__dirname, 'dist');

const sourceExtractCss = new ExtractTextPlugin({
  filename: 'source.[hash:8].css',
  allChunks: true,
  ignoreOrder: true,
});
const moduleExtractCss = new ExtractTextPlugin({
  filename: 'module.[hash:8].css',
  allChunks: true,
  ignoreOrder: true,
});
const config = {
  entry: {
    app: './src/index.ts', // 'react', 'react-dom', 'classnames', 'lodash', 'moment'
    vendor: ['object-assign', 'jquery', 'dva-loading', 'crypto', 'dva',
      'react-dnd-html5-backend', 'path-to-regexp', 'qs', 'react-collapse', 'react-countup', 'react-dnd',
      'simditor', 'simditor-fullscreen', 'socket.io-client', 'recharts'],
  },
  output: {
    path: targetPath,
    publicPath: '/',
    filename: '[name].[hash:8].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '*'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'res/[ext]/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: sourcePath,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }],
      },
      {
        test: /\.(ts|tsx)$/,
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
        use: sourceExtractCss.extract({
          use: [
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
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        include: sourcePath,
        use: sourceExtractCss.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        include: modulePath,
        use: moduleExtractCss.extract({
          use: ['css-loader'],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    moduleExtractCss,
    sourceExtractCss,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: false,
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5,
      minChunkSize: 1000,
    }),
    new HtmlWebpackPlugin({
      title: '爬虫管理后台',
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      favicon: path.resolve(__dirname, 'src', 'assets', 'image', 'icon', 'logo@2x.png'),
    }),
  ],
  bail: true,
};

export default config;
