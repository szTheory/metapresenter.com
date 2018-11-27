const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    main: path.resolve('./source/javascripts/main.js'),
  },

  output: {
    path: path.resolve('./.tmp/dist'),
    filename: 'javascripts/application.js',
  },

  resolve: {
    modules: [
      path.resolve('./node_modules'),
    ]
  },

  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // })
    new webpack.ProvidePlugin({
      $: "jquery",
      // jQuery: "jquery",
      // "window.$": "jquery",
      // "window.jQuery": "jquery",
      // Popper: ["popper.js", "default"],
      // Waves: "node-waves"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // inject CSS to page
          'css-loader', // translates CSS into CommonJS modules
          'postcss-loader', // Run post css actions
          'sass-loader', // compiles Sass to CSS
        ],
      }
      
      // {
      //   test: /\.(scss)$/,
      //   use: [{
      //     loader: 'style-loader', // inject CSS to page
      //   }, {
      //     loader: 'css-loader', // translates CSS into CommonJS modules
      //   }, {
      //     loader: 'postcss-loader', // Run post css actions
      //     options: {
      //       plugins: function () { // post css plugins, can be exported to postcss.config.js
      //         return [
      //           require('precss'),
      //           require('autoprefixer')
      //         ];
      //       }
      //     }
      //   }, {
      //     loader: 'sass-loader' // compiles Sass to CSS
      //   }]
      // },
    ]
  }

  // module: {
  //   rules: [
  //     {
  //       test: /.*\.scss$/,
  //       loader: "sass-loader" // compiles Sass to CSS
  //       // loader: ExtractTextPlugin.extract(
  //       //   "style",
  //       //   "css!sass?sourceMap&includePaths[]=" + __dirname + "/node_modules"
  //       // )
  //     },
  //     // Load plain-ol' vanilla CSS
  //     { test: /\.css$/, loader: "style!css" },
  //   ],
  // }
};
