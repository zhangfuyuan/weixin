# findDifference

  用 [WePY](https://tencent.github.io/wepy/document.html#/) + [wepy-X-minui](https://github.com/jimmyrogue/wepy-X-minui) 框架开发的微信小程序“找不同”游戏

  [WePY的github资源](https://github.com/Tencent/wepy)
  
  [minui组件库](https://meili.github.io/min/docs/minui/index.html)

## 开发流程

### （一）创建项目

  ```
    npm install wepy-cli -g
    
    wepy new findDifference
    
    cd findDifference
    
    wepy build --watch
  ```
  
### （二）开发环境/工具配置

1. 微信开发者工具

  >（1）`详情` -> `关闭ES6转ES5`
  >
  >（2）`详情` -> `关闭上传代码时样式自动补全`
  >
  >（3）`详情` -> `关闭代码压缩上传`
  >
  >（4）`设置` -> `编辑设置` -> `文件保存时自动编译小程序`
  >
  >（5）本地项目根目录重新运行 `wepy build --watch` ，开启实时编译

* 开发时不确定请求域名，建议启动 `不校验安全域名、web-view 域名、TLS 版本以及 HTTPS 证书`

2. WebStorm

  >（1）打开 `Settings` ，搜索 `Plugins` ，搜索 `Vue.js` 插件并安装。
  >
  >（2）打开 `Settings` ，搜索 `File Types` ，找到 `Vue.js Template` ，在 `Registered Patterns` 添加 `*.wpy`，即可高亮。


