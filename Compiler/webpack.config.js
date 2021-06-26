const path = require('path');

module.exports = {
  entry: './dist/Compiler.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
