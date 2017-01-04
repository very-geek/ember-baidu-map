# Ember Baidu Map [![travis-ci][travis-ci]][travis-link] [![fastboot][fastboot]][self]

[self]: https://github.com/very-geek/ember-baidu-map	"Ember Baidu Map"
[travis-link]: https://travis-ci.org/very-geek/ember-baidu-map
[travis-ci]: https://img.shields.io/travis/very-geek/ember-baidu-map/master.svg?style=flat-square
[fastboot]: https://img.shields.io/badge/%20fastboot--compatible%20-yes-brightgreen.svg?style=flat-square

## 安装

在 Ember 应用程序或 addon 项目的根路径下执行：

```shell
$ ember install ember-baidu-map
```
## 配置

打开 `config/environment.js` 添加如下配置：

```javascript
module.exports = function(environment) {
  var ENV = {
    // 其他配置
    BaiduMap: {
      async: true,
      secret: '...'
    }
  }
  
  return ENV
}
```

选项说明如下：

- `async`: 是否使用 `<script async ...` 来加载百度地图脚本。默认为 `true`
- `secret`: 授权密钥。如果不填会默认加载 v1.4 版本，因为从 v1.5 开始必须提供授权密钥，如果提供了密钥会加载最新版本（目前是 v2.0）

## 使用

直接打开浏览器，百度地图 SDK 已经加载了（如果没有，请发 issue 给我），现在你可以直接使用 `window.BMap` 来编写你的代码了。不过 ember-baidu-map 做了 ES2015 Module Shim，所以更加推荐你这样来引用：

```javascript
import BMap from 'baidu-map'
```

