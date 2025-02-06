---
title: Space 间距
description: 快速为一系列元素提供统一的间距
---

# Space 间距

## 代码示例

### 基础用法

最简单的用法。

<preview path="../demo/Space/Basic-Space.vue" title="基础用法" description="最简单的用法。"></preview>

### 纵向排列

添加 `vertical` 属性可以实现纵向排列。

<preview path="../demo/Space/Vertical-Space.vue" title="纵向排列" description="添加 `vertical` 属性可以实现纵向排列。"></preview>

### 不同大小

内置了三种大小，通过 `size` 设置，也可以传入数字或者数组自定义。

<preview path="../demo/Space/Space-Size.vue" title="不同大小" description="内置了三种大小，通过 `size` 设置，也可以传入数字或者数组自定义。"></preview>

### 各种布局

通过 `justify` 可以设置主轴的对齐方式，还可以通过 `align` 设置交叉轴的对齐方式。

<preview path="../demo/Space/Space-Justify.vue" title="各种布局" description="通过 `justify` 可以设置主轴的对齐方式，还可以通过 `align` 设置交叉轴的对齐方式。"></preview>

## API

### 预设类型

```ts
type SpaceAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
type SpaceSize = 'small' | 'default' | 'large' | number | [number, number]
```

### Linker 属性

| 名称     | 类型           | 说明                 | 默认值      |
| -------- | -------------- | -------------------- | ----------- |
| align    | `SpaceAlign`   | 设置交叉轴的对齐方式 | `'stretch'` |
| inline   | `boolean`      | 设置是否为行内布局   | `false`     |
| justify  | `SpaceJustify` | 设置主轴的对齐方式   | `start`     |
| no-wrap  | `boolean`      | 设置是否不换行       | `false`     |
| size     | `SpaceSize`    | 设置间距的大小       | `'default'` |
| vertical | `boolean`      | 设置主轴是否纵向     | `false`     |
