const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
// const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    application: path.resolve('./source/javascripts/application.js'),
  },

  output: {
    path: path.resolve('./.tmp/dist'),
    filename: 'javascripts/[name].js',
  },

  resolve: {
    modules: [
      path.resolve('./node_modules'),
    ],
    alias: {
      'images': path.resolve('./source/images'),
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      // TODO: remove jquery dep
      $: "jquery",
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),

    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      optipng: {
        optimizationLevel: 9
      },
      jpegtran: {
        progressive: true
      },
    })
  ],
  module: {
    rules: [

      {
        // (\.\w+) at the end supports .erb
        test: /\.(sa|sc|c)ss(\.\w+)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader?url=false', // translates CSS into CommonJS modules
          'postcss-loader',
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              "includePaths": [
                path.resolve(__dirname, 'node_modules')
              ]
            }
          }
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: 'images/[name].[ext]'
            },
          },
        ],
      },

      {
        test: /\.(woff(2)?|ttf|eot).*$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
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
        test: /\.erb$/,
        enforce: 'pre',
        loader: 'rails-erb-loader',
        options: {
          runner: 'ruby',
          engine: 'erb',
        }
      },
    ]
  }
};
