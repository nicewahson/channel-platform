const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    // index1: path.join(__dirname, 'webpackfiles/index.webpack2.js')
  },

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js', //hash后缀
    chunkFilename: '[name].chunk.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'build')]),
    new HtmlWebpackPlugin({
      title: 'htmlplugin'
    }),
    new WebpackManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module:{
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        use: ['file-loader']
      },
      {
        test: /.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /.xml$/,
        use: ['xml-loader']
      }
    ]
  },

  mode: 'development' // 相关配置 比如uglifyjs
}