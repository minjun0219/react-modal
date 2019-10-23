const webpack = require('webpack');
const Fiber = require('fibers');

/* eslint-disable global-require */
module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('dart-sass'),
              fiber: Fiber
            }
          }
        ]
      }, {
        test: /\.(svg|png|jpg|gif|woff|woff2|eot|otf|ttf|cur)$/i,
        loader: 'url-loader?limit=10000'
      }
    ]
  }
};
