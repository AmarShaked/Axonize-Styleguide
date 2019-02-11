/* global __dirname, require, module */

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const libraryName = pkg.name;

const dependencies = Object.keys(pkg.peerDependencies);

let outputFile;
let mode;

if (env === 'build') {
  mode = 'production';
  outputFile = `${libraryName}.min.js`;
} else {
  mode = 'development';
  outputFile = `${libraryName}.js`;
}

const config = {
  mode,
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: dependencies,
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules/antd'),
          path.resolve(__dirname, 'node_modules/@ant-design'),
        ],
      },
    ],
  },
  // plugins: [new BundleAnalyzerPlugin()],
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
};

module.exports = config;
