const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // PRODUCTION MODE
    mode: 'production',
    devtool: false,
    target: 'browserslist',

    // PROD PLUGINS
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
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
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("postcss-preset-env")],
                },
              },
            },
            'group-css-media-queries-loader',
            {
              loader: "resolve-url-loader",
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ]
        },
      ],
    },

    // OPTS
    optimization: {
      minimize: true,
      minimizer: [
          '...',
          new CssMinimizerPlugin(),
      ],
    },
});
