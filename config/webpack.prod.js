const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  // PRODUCTION MODE
  mode: 'production',
  devtool: false,
  target: 'browserslist',

  // PROD PLUGINS
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new WebpackObfuscator ({
        rotateStringArray: true
    }, ['excluded_bundle_name.js'])
  ],

  // PROD RULES
  module: {
    rules: [
      // CSS FILES
      {
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
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
      },
    ],
  },

  // OPTIMIZATION FOR PRODUCTION
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        libs: {
          name: 'libs',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
});
