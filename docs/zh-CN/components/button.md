---
title: Button 按钮
description: 基础通用组件，用于标记一组操作命令，由用户点击触发，响应用户并完成响应的业务逻辑。
---

# Button 按钮

## 代码示例

基础通用组件，用于标记一组操作命令，由用户点击触发，响应用户并完成相应的业务逻辑。

### 按钮类型

通过设置 `type` 属性的值为 `primary`、`info`、`success`、`warning` 和 `error` 来创建不同颜色的按钮，不设置时为默认样式。

<preview path="../demo/Button/Basic-Button.vue" title="按钮类型" description="通过设置 `type` 属性的值为 `primary`、`info`、`success`、`warning` 和 `error` 来创建不同颜色的按钮，不设置时为默认样式。"></preview>

### 禁用状态

添加 `disabled` 属性即可让按钮处于禁用状态。

<preview path="../demo/Button/Disabled-Button.vue" title="禁用状态" description="添加 `disabled` 属性即可让按钮处于禁用状态。"></preview>

### 简约风格

添加 `simple` 属性，使按钮变为简约风格，使用浅色系色调。

<preview path="../demo/Button/Simple-Button.vue" title="简约风格" description="添加 `simple` 属性，使按钮变为简约风格，使用浅色系色调。"></preview>

### 透明按钮

添加 `transparent` 属性将按钮底色变为透明，常用在有色背景上。

<preview path="../demo/Button/Transparent-Button.vue" title="透明按钮" description="添加 `transparent` 属性将按钮底色变为透明，常用在有色背景上。"></preview>

### 文字按钮

添加 `text` 属性可以让按钮看起来和普通文字无异。

<preview path="../demo/Button/Text-Button.vue" title="文字按钮" description="添加 `text` 属性可以让按钮看起来和普通文字无异。"></preview>

### 虚线按钮

添加 `dashed` 属性可以将按钮变成虚线边框按钮。

<preview path="../demo/Button/Dashed-Button.vue" title="虚线按钮" description="添加 `dashed` 属性可以将按钮变成虚线边框按钮。"></preview>

### 按钮大小

内置三种大小，通过 `size` 设置。

<preview path="../demo/Button/Button-Size.vue" title="按钮大小" description="内置三种大小，通过 `size` 设置。"></preview>

### 添加图标

通过 `icon-before` 及 `icon-after` 属性指定图标。

<preview path="../demo/Button/Icon-Button.vue" title="添加图标" description="通过 `icon-before` 及 `icon-after` 属性指定图标。"></preview>

### 加载状态

添加 `loading` 属性可以让按钮处于加载状态。

<preview path="../demo/Button/Loading-Button.vue" title="加载状态" description="添加 `loading` 属性可以让按钮处于加载状态。"></preview>

## API

### 预设类型

```ts
type ButtonAttrType = 'button' | 'submit' | 'reset'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
```

### Button 属性

| 名称        | 类型             | 说明                                   | 默认值     |
| ----------- | ---------------- | -------------------------------------- | ---------- |
| attr-type   | `ButtonAttrType` | 设置原生 `<button>` 元素的 `type` 属性 | `'button'` |
| block       | `boolean`        | 是否为块级元素，设置后宽度变为 `100%`  | `false`    |
| circle      | `boolean`        | 设置是否为圆形按钮                     | `false`    |
| disabled    | `boolean`        | 设置是否为禁用状态                     | `false`    |
| icon-after  | `LucideIcon`     | 按钮后置图标                           | `null`     |
| icon-before | `LucideIcon`     | 按钮前置图标                           | `null`     |
| loading     | `boolean`        | 设置是否为加载状态                     | `false`    |
| simple      | `boolean`        | 开启后，按钮将变为浅色系的简约风格     | `false`    |
| size        | `ButtonSize`     | 按钮的大小                             | `'medium'` |
| text        | `boolean`        | 设置是否为文本按钮                     | `false`    |
| transparent | `boolean`        | 设置是否为透明按钮                     | `false`    |
| type        | `ButtonType`     | 设置按钮类型                           | `default`  |

### Button 事件

| 名称  | 说明                                   | 参数                  |
| ----- | -------------------------------------- | --------------------- |
| click | 左键点击按钮时触发，返回点击的事件对象 | `(event: MouseEvent)` |

### Button 插槽

| 名称        | 说明             | 参数 |
| ----------- | ---------------- | ---- |
| default     | 按钮的内容插槽   |      |
| icon-after  | 按钮后置图标插槽 |      |
| icon-before | 按钮前置图标插槽 |      |
| loader      | 加载图标插槽     |      |
