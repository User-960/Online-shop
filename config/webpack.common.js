const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// UTILS
const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {
  // ENTRYPOINT
  entry: {
    app: path.resolve(__src, 'main.ts'),
  },

  // GENERAL PLUGINS
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Minimal base config',
      favicon: path.resolve(__src, 'static', 'favicon.ico'),
      template: path.resolve(__src, 'templates', 'index.html'),
    })
  ],

   // GENERAL RULES
    module: {
      rules: [
        // TYPESCRIPT FILES
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
      ]
    },

  // ENDPOINT
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__base, 'dist'),
    clean: true,
  },
};
