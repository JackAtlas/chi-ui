---
title: Input 输入框
description: 通过键入内容输入数据，是最基础的表单域的包装。
---

# Input 输入框

通过键入内容输入数据，是最基础的表单域的包装。

## 代码示例

### 基础用法

基础用法，可以使用 `v-model:value` 进行双向绑定。

<preview path="../demo/Input/Basic-Input.vue" title="基础用法" description="基础用法，可以使用 `v-model:value` 进行双向绑定。"></preview>

### 禁用状态

添加 `disabled` 属性可以设置禁用状态。

<preview path="../demo/Input/Disabled-Input.vue" title="禁用状态" description="添加 `disabled` 属性可以设置禁用状态。"></preview>

### 可清空

添加 `clearable` 属性可以使控件值可清空。

<preview path="../demo/Input/Clearable-Input.vue" title="可清空" description="添加 `clearable` 属性可以使控件值可清空。"></preview>

### 内嵌图标

设置 `prefix` 和 `suffix` 的值或使用同名插槽，可以为输入框添加前置和后置图标。

<preview path="../demo/Input/Input-Icon.vue" title="内嵌图标" description="设置 `prefix` 和 `suffix` 的值或使用同名插槽，可以为输入框添加前置和后置图标。"></preview>

### 改变尺寸

设置 `size` 属性的值可以改变输入框的尺寸，目前一共提供了三种尺寸供选择。

<preview path="../demo/Input/Input-Size.vue" title="改变尺寸" description="设置 `size` 属性的值可以改变输入框的尺寸，目前一共提供了三种尺寸供选择。"></preview>

### 同步输入

默认情况下双向绑定是基于 `change` 事件，添加了 `sync` 属性后将变为基于 `input` 事件。

<preview path="../demo/Input/Input-Sync.vue" title="同步输入" description="默认情况下双向绑定是基于 `change` 事件，添加了 `sync` 属性后将变为基于 `input` 事件。"></preview>

### 前后置插槽

使用 `before` 和 `after` 属性或插槽可以将一些内容与输入框组合。

如果你想要一个按钮、选择器或是其他控件，应该使用 `before-action` 和 `after-action` 插槽。

<preview path="../demo/Input/Input-Action.vue" title="前后置插槽" description="使用 `before` 和 `after` 插槽可以将一些内容与输入框组合。如果你想要一个按钮、选择器或是其他控件，应该使用 `before-action` 和 `after-action` 插槽。"></preview>
