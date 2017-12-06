import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as _ from 'lodash';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import * as path from 'path';
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import { baseConfig, moduleRules, plugins } from './webpack.config.base';

const sourcePath = path.resolve(__dirname, 'src');
const modulePath = path.resolve(__dirname, 'node_modules');
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
const config = _.assign({}, baseConfig, {
  module: {
    rules: [
      ...moduleRules,
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
    ...plugins,
    moduleExtractCss,
    sourceExtractCss,
    new OptimizeCssAssetsPlugin(),
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: false,
      extractComments: false,
    }),
  ],
});

export default config;
