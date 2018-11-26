var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    site: path.resolve('./source/javascripts/main.js')
  },

  output: {
    path: path.resolve('./.tmp/dist'),
    filename: 'javascripts/application.js',
  },
  
  resolve: {
    modules: [
      path.resolve('./source/javascripts'),
      "node_modules"
    ]
  },
};
