---
title: Button
description: 基础通用组件，用于标记一组操作命令，由用户点击触发，响应用户并完成响应的业务逻辑。
---

# Button 按钮

## 代码示例

基础通用组件，用于标记一组操作命令，由用户点击触发，响应用户并完成响应的业务逻辑。

<preview path="../demo/Button/Basic-Button.vue" title="基础用法" description="Button 组件的基础用法"></preview>

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
| block     | boolean          | 是否为块级元素                         | `false`    |
