# webpack
随着前端自动化构建的成熟，`webpack`在其中扮演重要角色。webpack的作用，引用中文官网的一句话`webpack 是一个现代 JavaScript 应用程序的静态模块打包器`，目前最新版本是`4.0.0`
ps: 掌握部分模块化知识、es6、node为最佳
# 2. 四个核心
  `入口(entry)`、`输出(output)`、`loader`、`插件(plugins)`
## 2.1 入口
`入口(entry)`为指定的打包文件入口。

* webpack.config.js 为webpack基本配置文件，相关设置均在此文件中 *
```JS
module.exports = {
    // 配置入口文件,指定需要配置的文件及其路径
    // 1. 单页面配置
    entry: 'path/targetFiles.js'
    
}
/******************/
module.exports = {
// 2. 多页面配置
    entry: {
        page1: 'path/targetFiles1.js',
        page2: 'path/targetFiles2.js'
     }
}
```
## 2.2 输出
`输出(output)`配置由webpack处理的打包后的文件输出配置的信息
```JS
module.exports = {
    entry: 'path/app.js',
    output: {
        // 输出路径;ps:path为nodejs处理文件与目录的路径,需提前引入const path = require('path');
        path: path.resolve(__dirname, 'dist'),
        // 输出后的文件名
        filename: 'bundle.js'
    }
}
// 配置多文件
module.exports = {
    entry: {
        app: 'path/app.js',
        mine: 'path/mine.js'
    },
    output: {
        // 指定到dist文件下
        path: __dirname + '/dist',
        // 根据入口文件名进行适配
        filename: [name][hash:5].js'
    }
}
```
## 2.3 loader
`webpack`除了能够处理`JS文件以外`，还可以提供各种`loader`处理比如`css`,`字体`等等文件

## 2.4 插件
`插件(Plugins)`
# 常用名词（包含webpack与node）
- `__dirname`: 根目录