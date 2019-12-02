var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    bundle: __dirname + '/src/frontend/index.js'
  },
  output: {
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
