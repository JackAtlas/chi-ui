---
title: 快速上手
description: 通过该章节，你将了解到如何快速开始使用 Chi-UI
---

# 快速上手

通过该章节，你将了解到如何快速开始使用 Chi-UI

> 在开始之前，你需要掌握了 [Vue 3](https://v3.cn.vuejs.org/) 的正确打开方式。

## 安装 Chi-UI

```bash
# 使用 pnpm
pnpm add @jackatlas/chi-ui

# 使用 yarn
yarn add @jackatlas/chi-ui
```

## 引入

**按需引入**开发中

如果你完全不介意全量引入增加的包体积，或者你几乎使用了所有的组件，你也可以选择全量引入整个组件库：

```javascript
import '@jackatlas/chi-ui/style.css'

import { createApp } from 'vue'
import App from './app.vue'
import { install as ChiUI } from '@jackatlas/chi-ui'

createApp(app).use(ChiUI).mount('#app')
```
