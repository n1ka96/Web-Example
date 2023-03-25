
# npm 
1、node package manager 
   包管理,比github和官网下载包,然后用<script src='  '> <script>的方式便捷
2、安装 
   npmjs.org上可以查询相应的包以及安装方式
   npm install dayjs局部 -g全局开发和生产 / -save-dev(-D)只有开发环境
3、卸载
   npm uninstall dayjs
4、运行
   node main.js
   
1、package.json
   各种各样的配置信息,json文件格式"name" = "xxx",双引号
   两种方式创建: 1.npm initcl创建package.json 2.脚手架Vue CLI
   基础字段、script脚本字段-"start": "node ./src/utils/main.js"、
2、node_modules/xxx module.export
   各种各样的配置信息,json文件格式"name" = "xxx",双引号
   两种方式创建: 1.npm initcl创建package.json 2.脚手架Vue CLI
   基础字段、script脚本字段-"start": "node ./src/utils/main.js"、dependencies生产和开发、devDependencies只有开发
   semver版本规范 ^0.1.1和~0.1.1 ^代表后两位最新,~代表最后一位最新
3、package-lock.json
   基础字段,require,lockversion
4、npm install 原理
   package.js->npm install->判断package-lock.json->没有的话之前去仓库下载并生成package-lock.json
                                                 ->有的话->检查依赖->一致的话,查找缓存;不一致要判别依赖包
