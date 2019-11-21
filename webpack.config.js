var webpack = require('webpack');
var path = require('path');

var config = {
  mode: 'production',
  entry: './src/frontend/index',
  output: {
    path: __dirname + '/public'
  },
  filename: 'bundle.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  }
};

module.exports = config;
