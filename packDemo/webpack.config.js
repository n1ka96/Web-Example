const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: './a.js',//入口文件，这个src目录下的a.js是我随便写的一个console.log()打印信息
  output: {//打包出口配置
    path: path.resolve(__dirname, 'dist'),//打包出口的文件夹
    filename: 'main.js',//打包后文件名称
  },
};
