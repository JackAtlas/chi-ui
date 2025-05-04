---
title: Grid 栅格布局
description: 二维栅格布局组件，基于行和列来定义区域块，用于快捷地创建稳健的纵横交错布局。
---

# Grid 栅格布局

## 代码示例

### 基础用法

单行栅格布局。

使用一个 Grid 组件和一组 Cell 组件，就可以创建一个基本的栅格系统。

<preview path="../demo/Grid/Basic-Grid.vue" title="基础用法" description="单行栅格布局。使用一个 Grid 组件和一组 Cell 组件，就可以创建一个基本的栅格系统。"></preview>

### 定制栅格

Grid 组件的 `rows` 和 `columns` 属性，可以传入数字定制栅格的模板行和模板列的大小。

如果这还不满足需求，这两项属性还支持传入字符串和数组，传入字符串时将会直接赋值给对应的 `grid-template` 样式属性，传入数组时则会组装后再赋值。

注意一：数组内的数字元素默认单位为 `fr`。

注意二：Cell 组件默认宽度为 `24`，当显式地设置了 Grid 的 `columns` 属性后，如果这是一个数字，则 Cell 组件的默认宽度会与之对齐，其他情况则会变为 1。

<preview path="../demo/Grid/Custom-Grid.vue" title="定制栅格" description="Grid 组件的 `rows` 和 `columns` 属性，可以传入数字定制栅格的模板行和模板列的大小。"></preview>

### 栅格间距

通过设置 Grid 组件的 `gap` 属性，可以为栅格增加间距。

传入一个数组可以分别控制横向和纵向的间距。

<preview path="../demo/Grid/Grid-Gap.vue" title="栅格间距" description="通过设置 Grid 组件的 `gap` 属性，可以为栅格增加间距。传入一个数组可以分别控制横向和纵向的间距。"></preview>

### 自由布局

Cell 组件在纵横方向上分别有三个属性：`top`、`bottom`、`height` 和 `left`、`right`、`width`。

两个方向都可以通过设置其中的两个属性来为栅格定位。

<preview path="../demo/Grid/Free-Grid.vue" title="自由布局" description="Cell 组件在纵横方向上分别有三个属性：`top`、`bottom`、`height` 和 `left`、`right`、`width`。两个方向都可以通过设置其中的两个属性来为栅格定位。"></preview>

### 子元素弹性布局

通过在 Grid 组件设置 `cell-flex` 属性为 `true`，或传入 `{justify, align}` 对象来开启 Cell 组件内的弹性布局。

通过在 Cell 组件设置 `use-flex` 属性为 `true`，或传入 `{justify, align}` 对象来为单独 Cell 组件开启弹性布局。

将 Cell 组件的 `use-flex` 属性显式地设置为 `false`，则可以禁用其弹性布局。

<preview path="../demo/Grid/Cell-Flex.vue" title="子元素弹性布局"></preview>

## API

### Grid 属性

| 名称         | 类型                                                                                                                                                  | 说明                                                                                                                 | 默认值      |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------- |
| align        | `'top' \| 'middle' \| 'bottom' \| 'stretch'`                                                                                                          | 垂直对齐方式                                                                                                         | `'stretch'` |
| auto-columns | `number \| string \| (number \| string)[]`                                                                                                            | 设置栅格的自动列，同 `grid-auto-columns`，传入数字时以及数组中的数字元素默认单位为 `fr`                              | `'auto'`    |
| auto-rows    | `number \| string \| (number \| string)[]`                                                                                                            | 设置栅格的自动行，同 `grid-auto-rows`，传入数字时以及数组中的数字元素默认单位为 `fr`                                 | `'auto'`    |
| cell-flex    | `boolean \| { justify?: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly', align?: 'top' \| 'middle' \| 'bottom' }` | 设置其下的栅格是否为弹性布局，可以传入一个 ` {justify, align}` 进行定制化                                            | `false`     |
| gap          | `number\|number[]`                                                                                                                                    | 栅格间隔，可以传入 `[horizontal, vertical]` 的数组                                                                   | `0`         |
| rows         | `number \| string \| (number \| string)[]`                                                                                                            | 设置栅格的模板行，同 `grid-template-rows`，传入数字时将当作行数并使用 `repeat` 处理，数组中的数字元素默认单位为 `fr` | `'none'`    |

### Cell 属性

| 名称     | 类型                                                                                                                                                  | 说明                                                                                                                         | 默认值   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- |
| bottom   | `number \| string`                                                                                                                                    | 设置栅格的下边界，传入数字时起始值为 `0`，应仅用 `top`、`bottom` 和 `height` 中的两个属性来确定栅格的纵向属性                | `''`     |
| height   | `number`                                                                                                                                              | 设置栅格的高度占位，默认为占一行                                                                                             | `1`      |
| left     | `number \| string`                                                                                                                                    | 设置栅格的左边界，传入数字时起始值为 `0`                                                                                     | `'auto'` |
| right    | `number \| string`                                                                                                                                    | 设置栅格的右边界，传入数字时起始值为 `0`，应仅用 `left`、`right` 和 `width` 中的两个属性来确定栅格的横向属性                 | `''`     |
| top      | `number \| string`                                                                                                                                    | 设置栅格的上边界，传入数字时起始值为 `0`                                                                                     | `'auto'` |
| use-flex | `boolean \| { justify?: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly', align?: 'top' \| 'middle' \| 'bottom' }` | 设置是否为弹性布局，同时在上层开启了 `cell-flex` 时，将优先栅格自身的弹性布局设置，显式地设置成 `false` 可以强制禁用弹性布局 | `false`  |
| width    | `number`                                                                                                                                              | 设置栅格的宽度占位，默认为占满一行，会根据上级 Grid 的 `columns` 有不一样的默认表现                                          | `null`   |
