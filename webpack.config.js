const path = require('path');

module.exports = {
  entry: './src/index.js', // <- din startpunkt
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
