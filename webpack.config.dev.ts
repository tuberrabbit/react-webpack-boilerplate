import * as _ from 'lodash';
import * as path from 'path';
import * as webpack from 'webpack';
import { baseConfig, moduleRules, plugins } from './webpack.config.base';

const sourcePath = path.resolve(__dirname, 'src');
const modulePath = path.resolve(__dirname, 'node_modules');
const config = _.assign({}, baseConfig, {
  module: {
    rules: [
      ...moduleRules,
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
    ...plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

export default config;
