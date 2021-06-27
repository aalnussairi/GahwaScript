const path = require('path');

module.exports = {
  entry: './dist/webInterface.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
