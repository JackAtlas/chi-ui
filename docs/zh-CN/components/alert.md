---
title: Alert 警告提示
description: 提供一个静态的警告提示，展限需要关注的内容，不会自动消失，可以由用户点击关闭。
---

# Alert 警告提示

## 代码示例

### 基础用法

通过设置 `type` 属性为 info、success、warning、error 以创建不同类型的警告提示。

<preview path="../demo/Alert/Basic-Alert.vue" title="基础用法" description="通过设置 `type` 属性为 info、success、warning、error 以创建不同类型的警告提示。"></preview>

### 带标题警告

当需要为警告添加一个简要的概括时，可以设置 `title` 属性或通过同名插槽添加一个标题。

<preview path="../demo/Alert/Alert-Title.vue" title="带标题警告" description="当需要为警告添加一个简要的概括时，可以设置 `title` 属性或通过同名插槽添加一个标题。"></preview>

### 可关闭

添加 `closable` 属性可以显示关闭按钮，点击关闭按钮可关闭警告提示。

<preview path="../demo/Alert/Closable-Title.vue" title="可关闭" description="添加 `closable` 属性可以显示关闭按钮，点击关闭按钮可关闭警告提示。"></preview>

### 自定义关闭

使用 `close` 插槽可以自定义关闭按钮的内容。

<preview path="../demo/Alert/Closable-Close-Title.vue" title="自定义关闭" description="使用 `close` 插槽可以自定义关闭按钮的内容。"></preview>

### 显示图标

添加 `icon` 属性可以显示图标，若传入一个字符串，则会使用对应名称的图标。

<preview path="../demo/Alert/Alert-Icon.vue" title="显示图标" description="添加 `icon` 属性可以显示图标，若传入一个字符串，则会使用对应名称的图标。"></preview>

### 有色的字体

添加 `colorful-text` 属性可以使警告的字体带有相应的颜色。

<preview path="../demo/Alert/Colorful-Text-Alert.vue" title="有色的字体" description="添加 `colorful-text` 属性可以使警告的字体带有相应的颜色。"></preview>

### 无边框

添加 `no-border` 属性可以禁用边框，在一些浅色调主题中可以让视觉效果更轻。

<preview path="../demo/Alert/Alert-No-Border.vue" title="无边框" description="添加 `no-border` 属性可以禁用边框，在一些浅色调主题中可以让视觉效果更轻。"></preview>

## API

### 预设类型

```ts
export type AlertType = 'primary' | 'info' | 'success' | 'warning' | 'error'
```

### Alert 属性

| 名称          | 类型                | 说明                                     | 默认值      |
| ------------- | ------------------- | ---------------------------------------- | ----------- |
| closable      | `boolean`           | 设置警告提示是否可以被关闭               | `false`     |
| colorful-text | `boolean`           | 设置字体是否具有和类型一致的颜色         | `false`     |
| icon          | `boolean \| string` | 设置是否显示图标，可传入图标名称进行指定 | `false`     |
| no-border     | `boolean`           | 设置是否禁用警告提示的边框               | `false`     |
| title         | `string`            | 设置警告提示标题，使用同名插槽后失效     | `''`        |
| type          | `AlertType`         | 警告提示的类型                           | `'primary'` |

### Alert 事件

| 名称  | 说明                   | 参数 |
| ----- | ---------------------- | ---- |
| close | 当警告提示被关闭时触发 |      |

### Alert 插槽

| 名称    | 说明                       | 参数 |
| ------- | -------------------------- | ---- |
| close   | 警告提示的关闭按钮内容插槽 |      |
| default | 警告提示的内容插槽         |      |
| icon    | 警告提示的图标内容插槽     |      |
| title   | 警告提示的标题内容插槽     |      |
