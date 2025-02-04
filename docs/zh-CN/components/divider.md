---
title: Divider
description: 间隔内容的分割线，用于对不同章节的文本段落进行分割或者对行内元素进行分割。
---

# Divider 分割线

## 代码示例

### 水平分割线

默认为水平分割线，可在中间加入文字。

<preview path="../demo/Divider/Basic-Divider.vue" title="水平分割线" description="默认为水平分割线，可在中间加入文字。"></preview>

### 文字位置

通过 `text-position` 改变文字所在的位置。

<preview path="../demo/Divider/Text-Position.vue" title="文字位置" description="通过 `text-position` 改变文字所在的位置。"></preview>

### 纵向分割线

添加 `vertical` 可以变成纵向分割线。

<preview path="../demo/Divider/Vertical-Divider.vue" title="纵向分割线" description="添加 `vertical` 可以变成纵向分割线。"></preview>

## API

### Divider 属性

| 名称          | 类型                                                    | 说明                       | 默认值     |
| ------------- | ------------------------------------------------------- | -------------------------- | ---------- |
| dashed        | `boolean`                                               | 设置分割线是否为虚线       | `false`    |
| primary       | `boolean`                                               | 设置嵌入文字为更显眼的状态 | `false`    |
| text-position | `'left'     \| 'center'                     \| 'right'` | 设置嵌入的文字位置         | `'center'` |
| vertical      | `boolean`                                               | 设置分割线是否为纵向       | `false`    |
