---
title: Linker 链接
description: 链接组件
---

# Linker 链接

## 代码示例

### 基本使用

设置 `type` 属性可以生成不同类型的链接。

<preview path="../demo/Linker/Basic-Linker.vue" title="基本使用" description="设置 `type` 属性可以生成不同类型的链接。"></preview>

### 禁用状态

添加 `disabled` 属性可以禁用链接。

<preview path="../demo/Linker/Disabled-Linker.vue" title="禁用状态" description="添加 `disabled` 属性可以禁用链接。"></preview>

### 添加图标

使用 `icon` 属性或者同名插槽为链接添加前置图标。

<preview path="../demo/Linker/Linker-Icon.vue" title="添加图标" description="使用 `icon` 属性或者同名插槽为链接添加前置图标。"></preview>

### 下划线

添加 `underline` 属性在鼠标移入链接时显示下划线。

<preview path="../demo/Linker/Underline-Linker.vue" title="下划线" description="添加 `underline` 属性在鼠标移入链接时显示下划线。"></preview>

## API

### 预设类型

```ts
type LinkerType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
```

### Linker 属性

| 名称      | 类型                       | 说明                          | 默认值      |
| --------- | -------------------------- | ----------------------------- | ----------- |
| disabled  | `boolean`                  | 设置是否为禁用状态            | `false`     |
| icon      | `LucideIcon`               | 链接的前置图标名称            | `null`      |
| target    | `HTMLAnchorElement.target` | 同 `<a>` 标签的 `target` 属性 | `''`        |
| to        | `HTMLAnchorElement.href`   | 链接的目标地址                | `''`        |
| type      | `LinkerType`               | 链接的类型                    | `'default'` |
| underline | `boolean`                  | 设置鼠标移入时是否显示下划线  | `false`     |

### Linker 事件

| 名称  | 说明                                   | 参数                  |
| ----- | -------------------------------------- | --------------------- |
| click | 左键点击链接时触发，返回点击的事件对象 | `(event: MouseEvent)` |

### Linker 插槽

| 名称    | 说明               | 参数 |
| ------- | ------------------ | ---- |
| default | 链接内容插槽       |      |
| icon    | 链接的前置图标插槽 |      |
