---
title: Masker 遮罩
description:
---

# Masker 遮罩

## 代码示例

### 基础用法

直接打开遮罩，当然也可以渲染一些东西在遮罩上。

<preview path="../demo/Masker/Basic-Masker.vue" title="基础用法" description="直接打开遮罩，当然也可以渲染一些东西在遮罩上。"></preview>

### 自定义遮罩

通过 `mask` 插槽，你可以自定义遮罩层，例如做一个镂空效果。

<preview path="../demo/Masker/Custom-Masker.vue" title="自定义遮罩" description="通过 `mask` 插槽，你可以自定义遮罩层，例如做一个镂空效果。"></preview>

## API

### Masker 属性

| 名称     | 类型                | 说明                                                    | 默认值  |
| -------- | ------------------- | ------------------------------------------------------- | ------- |
| active   | `boolean`           | 设置遮罩层是否显示，可以使用 `v-model` 双向绑定         | `false` |
| closable | `boolean`           | 设置是否可以点击遮罩层关闭                              | `false` |
| transfer | `boolean \| string` | 设置遮罩的渲染位置，设置为 `true` 时默认渲染至 `<body>` | `false` |

### Masker 事件

| 名称  | 说明                       | 参数 |
| ----- | -------------------------- | ---- |
| close | 当用关闭功能触发关闭时触发 |      |

### Masker 插槽

| 名称    | 说明         | 参数 |
| ------- | ------------ | ---- |
| default | 显示层的内容 |      |
| mask    | 遮罩层的内容 |      |
