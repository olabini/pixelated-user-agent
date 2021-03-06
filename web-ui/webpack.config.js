var path = require('path');
var webpack = require('webpack');
var copyWebpack = require('./config/copy-webpack');
var loaders = require('./config/loaders-webpack');
var aliases = require('./config/alias-webpack');

module.exports = {
  entry: {
    app: './app/js/index.js',
    backup_account: './src/backup_account/backup_account.js',
    sandbox: './app/js/sandbox.js'
  },
  node: { fs: 'empty' },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  devtool: 'source-map',
  resolve: {
    alias: aliases,
    extensions: ['', '.js']
  },
  module: {
    loaders: loaders
  },
  plugins: [copyWebpack, new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"development"'
    }
  })]
}
