---
title: Tooltip 提示
description: 用于需要在特定元素周围弹出一下拓展信息。
---

# Tooltip 提示

用于需要在特定元素周围弹出一下拓展信息。

## 代码示例

### 基础用法

最简单的用法。

<preview path="../demo/Tooltip/Basic-Tooltip.vue" title="基础用法" description="最简单的用法。"></preview>

### 触发方式

设置 `trigger` 属性的值可以改变提示的触发方式。

<preview path="../demo/Tooltip/Tooltip-Trigger.vue" title="触发方式" description="设置 `trigger` 属性的值可以改变提示的触发方式。"></preview>

### 延时

设置 `open-delay` 和 `close-delay` 属性的值可以指定气泡出现和消失的延迟毫秒数。

<preview path="../demo/Tooltip/Tooltip-Delay.vue" title="延时" description="设置 `open-delay` 和 `close-delay` 属性的值可以指定气泡出现和消失的延迟毫秒数。"></preview>

### 出现位置

通过 `placement` 属性可以设置气泡出现的位置。

<preview path="../demo/Tooltip/Tooltip-Placement.vue" title="出现位置" description="通过 `placement` 属性可以设置气泡出现的位置。"></preview>

### 无箭头

添加 `no-arrow` 属性可以禁用箭头。

<preview path="../demo/Tooltip/Tooltip-No-Arrow.vue" title="无箭头" description="添加 `no-arrow` 属性可以禁用箭头。"></preview>

### 反色主题

添加 `reverse` 属性可以启用反色主题。

<preview path="../demo/Tooltip/Tooltip-Reverse.vue" title="反色主题" description="添加 `reverse` 属性可以启用反色主题。"></preview>

## API

### 预设类型

```ts
type Placement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'right-start'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
```

### Tooltip 属性

| 名称       | 类型                 | 说明                     | 默认值    |
| ---------- | -------------------- | ------------------------ | --------- |
| closeDelay | `number`             | 设置气泡消失的延迟毫秒数 | `0`       |
| noArrow    | `boolean`            | 设置是否禁用箭头         | `false`   |
| openDelay  | `number`             | 设置气泡出现的延迟毫秒数 | `0`       |
| placement  | `Placement`          | 提示出现的位置           | `'top'`   |
| reverse    | `boolean`            | 设置气泡是否为反色主题   | `false`   |
| trigger    | `'hover' \| 'click'` | 气泡的触发方式           | `'hover'` |
