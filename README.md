# FJHW-UI  一个VUE UI组件

[![Build Status](https://travis-ci.com/codelzb/HW-UI.svg?branch=main)](https://travis-ci.com/codelzb/HW-UI)

[官方文档](暂无)

## 安装

克隆官方仓库或者使用 npm / yarn 安装

```
$ git clone https://github.com/codelzb/HW-UI.git

$ npm install fjhw
$ yarn add fjhw
```

## 使用

如果使用了 npm / yarn 安装，一般在 main.js 中如下配置：

```javascript
import Vue from 'vue'
import App from 'components/app.vue'
import Xue from 'fjhw'
import 'fjhw/lib/fjhw-ui.css'
Vue.use(Xue)
new Vue({
  el: '#app',
  render: h => h(App)
})
```

以上代码便完成了 fjhw-ui 的引入。需要注意的是，样式文件需要单独引入。

## 特别提醒

使用 fjhw-ui 时，您需要使用 border-box 盒模型，否则会影响样式。代码示例：

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

如果您觉得还不错，请 star
