import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const sourcePath = path.resolve(__dirname, 'src');
const targetPath = path.resolve(__dirname, 'dist');
export const baseConfig = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: targetPath,
    publicPath: '/',
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '*'],
  },
  devtool: 'inline-source-map',
  devServer: {
    noInfo: true,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  },
  bail: true,
};

export const moduleRules = [
  {
    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|otf)$/,
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
];

export const plugins = [
  new CleanWebpackPlugin(['dist']),
  new LodashModuleReplacementPlugin({
    paths: true
  }),
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
  }),
  new HtmlWebpackPlugin({
    title: 'My boilerplate',
    template: path.resolve(__dirname, 'src', 'index.ejs'),
    favicon: path.resolve(__dirname, 'src', 'assets', 'favicon.ico'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: false,
    },
  }),
];
