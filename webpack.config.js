/* global __dirname, require, module */

const webpack = require("webpack");
const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2
const pkg = require("./package.json");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const libraryName = pkg.name;

let outputFile, mode;

if (env === "build") {
  mode = "production";
  outputFile = `${libraryName}.min.js`;
} else {
  mode = "development";
  outputFile = `${libraryName}.js`;
}

const config = {
  mode,
  entry: `${__dirname}/src/index.js`,
  devtool: "source-map",
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    antd: "antd"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ],
        exclude: [path.resolve(__dirname, "node_modules/antd")]
      }
    ]
  },
  // plugins: [new BundleAnalyzerPlugin()],
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"]
  }
};

module.exports = config;
