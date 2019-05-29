var webpack = require('webpack'),
    path = require('path');

module.exports = {
    mode:'production',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.join(__dirname, 'public/build/'),
        filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    }
};