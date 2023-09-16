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
    // plugins的配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件,需要添加一个template
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
      template: './public/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    host: "localhost",
    port: "3000",
    open: true,
    hot: true
  }
};