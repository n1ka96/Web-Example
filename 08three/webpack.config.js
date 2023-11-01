const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
  
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, './dist')
  },
  module: {
    rules: [
      // loader的配置
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    host: "localhost",
    port: "5000",
    open: true,
    hot: true
  }
};