const path = require('path');
const Webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ESLintPlugin = require('eslint-webpack-plugin');

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
    // to remove warn in browser console: runtime-core.esm-bundler.js:3607 
    // Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__ are not explicitly defined...
    new Webpack.DefinePlugin({ 
      __VUE_OPTIONS_API__: true, 
      __VUE_PROD_DEVTOOLS__: true 
    }),
    new HtmlWebpackPlugin({
      title: 'Minimal base config',
      favicon: path.resolve(__src, 'static', 'favicon.ico'),
      template: path.resolve(__src, 'templates', 'index.html'),
    }),
    new VueLoaderPlugin(),
    new ESLintPlugin({ 
      fix: true,
      files: 'src/**/*.ts', 
    }),
  ],

   // GENERAL RULES
    module: {
      rules: [
        // VUE FILES
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },

        // TYPESCRIPT FILES
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },

        // JAVASCRIPT FILES
        {
          test: /\.js?$/,
          exclude: file => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
          ),
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', '@babel/preset-typescript', {
                'useBuiltIns': 'usage',
                'corejs': '3.22'
              }]],
            },
          },
        },

        // FONTS FILES
        {
          test: /\.woff2?$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },

        // IMAGE FILES
        {
          test: /\.(png|jpg)$/i, 
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[contenthash].[ext]',
                outputPath: 'images'
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
              }
            },
          ],
        }
      ]
    },

  // ENDPOINT
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__base, 'dist'),
    clean: true,
  },
};
