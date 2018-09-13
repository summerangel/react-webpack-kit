# react-webpack-kit

A simple front-end frame with webpack4, friendly to fresh


## 项目启动：

1、安装依赖：`yarn`；
2、启动：`yarn start`
3、启动mock数据：`npm run mock`
3、浏览器打开：http://localhost:3001/

## Project Construct

### config
This directory is mainly about the webpack config based on different environment.
- **webpack.common.conf.js** ---- webpack的一些基础配置，不同环境的webpack配置都是基于此
- **webpack.dev.conf.js** ---- 开发环境的webpack配置
- **webpack.prod.conf.js** ---- 生产环境的webpack配置

### mock
This is for back-end interface mock, here combined with mockjs and json-serve。
- **api** ---- 存放不同api所对应的数据
- **index.js** ---- json-server的主文件
- **routes.json** ---- 路由的映射

## src
### api 
```
export default {
  USER_INFO:'/api/user',
  AUTHOR_INFO:'/api/author'
}
```
### assets
这里我们会放项目的所需要图片资源，这些图片资源一般来说都是做图标的，都比较小。webpack会将其转化成**BASE64**去使用。如果你不想以这种方式使用，可以在static目录下存放图片资源。

### components
这里存放整个项目所用到的公共组件。

### utils
这里会存放一些自己的封装的js工具文件，比如我在项目基于axios封装了一个http.js,简化了axios的操作。

## static
这是一个静态资源目录，一般存放一些第三方工具库。这个目录主要两方面考虑：
- 有些第三方工具库没有npm包，我们无法用npm install 或者 yarn add方式添加
- 一些比较大的第三方工具库会影响我们的打包速度，可以把它拿出来通过script的方式引入

其实第三方工具库最好的方式是CDN，但是有些公司就是没有，无奈只能如此。你加入的第三工具库都可在当前服务器下”**/static/***“路径下获取到。

## 其他文件 
- .babelrc ---- babel转换的配置文件
- .gitignore ---- git操作所需要忽略的文件
- .postcssrc.js ---- postcss的配置文件
- package.json ---- 家喻户晓的东西
- README.md ---- 项目说明
- yarn.lock ---- 锁定包的版本
