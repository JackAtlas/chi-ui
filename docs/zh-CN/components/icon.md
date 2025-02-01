---
title: Icon
description: Chi UI 使用 Lucide 图标库提供的内部图标。
---

# Icon

Chi UI 使用 Lucide 图标库提供的内部图标。

## 代码示例

### 基本使用

通过 `name` 属性来指定对应的图标。

<preview path="../demo/Icon/Basic-Icon.vue" title="基本使用" description="通过 `name` 属性来指定对应的图标。"></preview>

### 修改颜色

通过 `color` 属性可快速修改图标的颜色。

<preview path="../demo/Icon/Icon-Color.vue" title="修改颜色" description="通过 `color` 属性可快速修改图标的颜色。"></preview>

### 调整尺寸

通过 `scale` 属性来进行缩放。

也可以通过 `size` 属性设置一个合法的 CSS 值指定图标的大小。

<preview path="../demo/Icon/Icon-Size.vue" title="调整尺寸" description="通过 `scale` 属性来进行缩放。也可以通过 `size` 属性设置一个合法的 CSS 值指定图标的大小。"></preview>

### 旋转效果

设置 `effect` 属性为 `spin-in` 或 `spin-out` 可以让图标旋转。

<preview path="../demo/Icon/Icon-Spin.vue" title="旋转效果" description="设置 `effect` 属性为 `spin-in` 或 `spin-out` 可以让图标旋转。"></preview>

### 自定义图标

<preview path="../demo/Icon/Custom-Icon.vue" title="自定义图标" description=""></preview>

## API

### 预设类型

```ts
type EffectType = 'spin-in' | 'spin-out'
```

### Icon 属性

| 名称   | 类型               | 说明               | 默认值 |
| ------ | ------------------ | ------------------ | ------ |
| color  | `string`           | 设置图标的颜色     | `null` |
| effect | `EffectType`       | 设置效果动画名称   | `null` |
| name   | `string`           | 图标的名称         | `''`   |
| scale  | `number \| string` | 设置图标的缩放比例 | `1`    |
| size   | `number \| string` | 指定图标的大小     | `null` |
