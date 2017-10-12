const path = require('path');

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/components/main.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
};
