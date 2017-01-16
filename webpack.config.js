
var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/app/app.js',

  output: {
    path: __dirname + '/build/',
    // filename: 'bundle-[hash].js'
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
              presets: ['es2015', 'react']
          }
      }
    ]
  },
  
  devServer: {
    contentBase: __dirname + '/build',
    port: 80,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    //new ET('bundle.css')
  ]
  
}

