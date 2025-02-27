---
title: Badge 徽标
description:
---

# Badge 徽标

## 代码示例

### 基础用法

最简单的用法，为一个元素添加一个徽标。

<preview path="../demo/Badge/Basic-Badge.vue" title="基础用法" description="最简单的用法，为一个元素添加一个徽标。"></preview>

### 最大值

通过 `max` 属性可以设置一个最大值，当徽标的值超过该值后会显示为加号状态。

<preview path="../demo/Badge/Max-Badge.vue" title="最大值" description="通过 `max` 属性可以设置一个最大值，当徽标的值超过该值后会显示为加号状态。"></preview>

### 状态点

添加 `is-dot` 属性并且不使用插槽，可以将徽标设置为状态点。

<preview path="../demo/Badge/Dot-Badge.vue" title="状态点" description="添加 `is-dot` 属性并且不使用插槽，可以将徽标设置为状态点。"></preview>

## API

### Badge 属性

| 名称    | 类型                                                                     | 说明                                                           | 默认值    |
| ------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- | --------- |
| color   | `string`                                                                 | 设置徽标的颜色，可以在内置类型无法满足需求时使用               | `null`    |
| content | `number \| string`                                                       | 徽标的内容                                                     | `null`    |
| is-dot  | `boolean`                                                                | 设置徽标是否为状态点                                           | `false`   |
| max     | `number`                                                                 | 当徽标为数字时，可以设置最大值，超过最大值后会显示为 `${max}+` |           |
| type    | `'error' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'disabled'` | 设置徽标的颜色                                                 | `'error'` |

### Badge 事件

| 名称        | 说明         | 参数 |
| ----------- | ------------ | ---- |
| badge-click | 当点击时触发 |      |
