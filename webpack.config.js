const webpack = require('webpack');
const path = require('path');
// const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    application: path.resolve('./source/javascripts/application.js'),
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
        test: /\.erb$/,
        enforce: 'pre',
        loader: 'rails-erb-loader',
        options: {
          runner: 'ruby',
          engine: 'erb',
        }
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // inject CSS to page
          'css-loader', // translates CSS into CommonJS modules
          'postcss-loader', // Run post css actions
        ],
      },
      {
        test: /\.(sa|sc)ss(\..+)?$/,
        use: [
          'style-loader', // inject CSS to page
          'css-loader', // translates CSS into CommonJS modules
          'postcss-loader', // Run post css actions
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              "includePaths": [
                require('path').resolve(__dirname, 'node_modules')
              ]
            }
          }
        ],
      }
    ]
  }
};
