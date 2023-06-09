// const path = require('path/posix');
const { merge } = require('webpack-merge');
const common  =require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  // DEVELOPMENT MODE
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',

  // DEV SERVER CONFIG
  devServer: {
    static: './dist',
    open: true,
    hot: true,
  },

  plugins: [
    new BundleAnalyzerPlugin()
  ],

  // DEV RULES
  module: {
    rules: [
      // CSS FILES
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'group-css-media-queries-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      }
    ],
  },
});
