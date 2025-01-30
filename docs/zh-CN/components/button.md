---
title: Button
description: 基础通用组件，用于标记一组操作命令，由用户点击触发，响应用户并完成响应的业务逻辑。
---

# Button 按钮

## 代码示例

基础通用组件，用于标记一组操作命令，由用户点击触发，响应用户并完成响应的业务逻辑。

### 按钮类型

通过设置 `type` 属性的值为 `primary`、`info`、`success`、`warning` 和 `error` 来创建不同颜色的按钮，不设置时为默认样式。

<preview path="../demo/Button/Basic-Button.vue" title="按钮类型" description="通过设置 `type` 属性的值为 `primary`、`info`、`success`、`warning` 和 `error` 来创建不同颜色的按钮，不设置时为默认样式。"></preview>

### 禁用状态

添加 `disabled` 属性即可让按钮处于禁用状态。

<preview path="../demo/Button/Disabled-Button.vue" title="禁用状态" description="添加 `disabled` 属性即可让按钮处于禁用状态。"></preview>

### 简约风格

简约风格的按钮使用浅色系色调。

<preview path="../demo/Button/Simple-Button.vue" title="简约风格" description="简约风格的按钮使用浅色系色调。"></preview>

## API

### 预设类型

```ts
type ButtonAttrType = 'button' | 'submit' | 'reset'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
```

### 属性

| 名称      | 类型             | 说明                                   | 默认值     |
| --------- | ---------------- | -------------------------------------- | ---------- |
| attr-type | `ButtonAttrType` | 设置原生 `<button>` 元素的 `type` 属性 | `'button'` |
| block     | `boolean`        | 是否为块级元素                         | `false`    |
| disabled  | `boolean`        | 设置是否为禁用状态                     | `false`    |
| simple    | `boolean`        | 开启后，按钮将变为浅色系的简约风格     | `false`    |
| type      | `ButtonType`     | 设置按钮类型                           | `default`  |

### 事件

| 名称  | 说明                                   | 参数                  |
| ----- | -------------------------------------- | --------------------- |
| click | 左键点击按钮时触发，返回点击的事件对象 | `(event: MouseEvent)` |

### 插槽

| 名称    | 说明           | 参数 |
| ------- | -------------- | ---- |
| default | 按钮的内容插槽 |      |
