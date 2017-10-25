const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    polyfill: ['babel-polyfill'],
    bundle: ['./src/components/main.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name][hash].[ext]',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name][hash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: ['polyfill.js'],
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
};
