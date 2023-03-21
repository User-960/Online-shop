const path = require('path/posix');
const { merge } = require('webpack-merge');
const common  =require('./webpack.common.js');

module.exports = merge(common, {
  // DEVELOPMENT MODE
  mode: 'development',
  devtool: 'inline-source-map',

  // DEV SERVER CONFIG
  devServer: {
    static: './dist',
    open: true,
    hot: true,
  },
});
