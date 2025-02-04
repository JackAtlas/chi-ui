---
title: Grid
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
