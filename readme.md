# Javascript project

## install lite-server for test

npm install lite-server
npm start

## Debug js in chrome

open link in chrome: https://googlechrome.github.io/devtools-samples/debug-js/get-started
debug via control+option+I

## typescript support

npm install -g typescript

## typescript compile

tsc app.js


## install react create

npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org
这样就可以使用 cnpm 命令来安装模块了：

$ cnpm install [name]
更多信息可以查阅：http://npm.taobao.org/。

使用 create-react-app 快速构建 React 开发环境
create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：

$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
