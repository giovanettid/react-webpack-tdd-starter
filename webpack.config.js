const path = require('path');

module.exports = {
  entry: './src/components/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};
