# 使用webpack搭建项目
建议安装最新稳定版`node`及`webpack`4+版本
# 初始化项目
##　安装必须插件
使用`npm init`创建项目描述`package.json`，在`package.json`里创建命令行命令
```JSON
...
"script": {
  "start": "webpack --config webpack.config.js"
}
...
```
安装webpack`npm i webpack -D`(`npm i -D webpack@<version>`安装指定版本webpack),4+版本还需安装`webpack-cli`,运行`npm i -D webpack-cli`，新建`webpack.config.js`进行`webpack`基础配置
## 配置项目目录结构
创建前端入口页面`touch index.html`，前端页面存放目录src及入口js文件`mkdir src && cd src && touch index.js`
