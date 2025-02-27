---
title: Typography 排版
description: Chi UI 提供了一些带有基本格式的文本组件。
---

# Typography 排版

Chi UI 提供了一些带有基本格式的文本组件。

::: warning 注意
示例样式受 vitepress 样式影响与实际有所出入，计划将重写 vitepress 主题以更好地展示案例。
:::

## 代码示例

### 基础用法

Chi UI 内置了一些与标签同名的组件，用以快速应用组件库的样式。

<preview path="../demo/Typography/Basic-Typography.vue" title="基础用法" description="Chi UI 内置了一些与标签同名的组件，用以快速应用组件库的样式。"></preview>

### 文本组件

提供了不同样式的文本。

当创建段落或加粗文本时可以使用快捷组件 P 和 Strong。

<preview path="../demo/Typography/Typography-Text.vue" title="文本组件" description="提供了不同样式的文本。当创建段落或加粗文本时可以使用快捷组件 P 和 Strong。"></preview>

### 标题组件

快速创建不同级别的标题，如果你想要更快，可以使用 H1、H2、H3、H4、H5、H6 快捷组件。

<preview path="../demo/Typography/Typography-Title.vue" title="标题组件" description="快速创建不同级别的标题，如果你想要更快，可以使用 H1、H2、H3、H4、H5、H6 快捷组件。"></preview>

### 标题标记

添加 `marker` 属性可以为标题快速添加一个标记，虽然它可能没什么实质性作用。

默认情况下标记的类型会跟随标题的类型，如果这不满足需求可以用 `marker-type` 属性指定标记的类型或自定义一个颜色。

<preview path="../demo/Typography/Title-Marker.vue" title="标题标记" description="添加 `marker` 属性可以为标题快速添加一个标记，虽然它可能没什么实质性作用。默认情况下标记的类型会跟随标题的类型，如果这不满足需求可以用 `marker-type` 属性指定标记的类型或自定义一个颜色。"></preview>

## API

### 预设类型

```ts
export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6
export type TypographyType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
```

### Text 属性

| 名称      | 类型             | 说明                                 | 默认值      |
| --------- | ---------------- | ------------------------------------ | ----------- |
| code      | `boolean`        | 是否为代码，设置后标签为 `<code>`    | `false`     |
| delete    | `boolean`        | 是否添加删除线，设置后标签为 `<del>` | `false`     |
| disabled  | `boolean`        | 是否禁用                             | `false`     |
| italic    | `boolean`        | 是否斜体                             | `false`     |
| keyboard  | `boolean`        | 是否添加键盘按键样式                 | `false`     |
| mark      | `boolean`        | 是否添加标记底色                     | `false`     |
| reversed  | `boolean`        | 字体颜色是否取反色                   | `false`     |
| strong    | `boolean`        | 是否加粗                             | `false`     |
| tag       | `string`         | 设置渲染的标签                       | `'span'`    |
| thin      | `boolean`        | 是否为细字体，与 `strong` 冲突       | `false`     |
| type      | `TypographyType` | 设置文本的类型                       | `'default'` |
| underline | `boolean`        | 是否添加下划线                       | `false`     |

其中 P 和 Strong 为 Text 的快捷组件。

### Title 属性

| 名称        | 类型             | 说明                                   | 默认值      |
| ----------- | ---------------- | -------------------------------------- | ----------- |
| aligned     | `boolean`        | 设置添加标记后是否按标记对齐           | `false`     |
| level       | `TitleLevel`     | 设置标题的级别                         | `5`         |
| marker      | `boolean`        | 是否添加标记                           | `false`     |
| marker-type | `string`         | 单独设置标记的类型，支持传入自定义颜色 | `null`      |
| thin        | `boolean`        | 是否为细标题                           | `false`     |
| top         | `boolean`        | 是否为置顶标题，置顶时上外边距为 `0`   | `false`     |
| type        | `TypographyType` | 设置标题的类型                         | `'default'` |

其中 H1、H2、H3、H4、H5、H6 为 Title 的快捷组件。

### Blockquote 属性

| 名称 | 类型             | 说明             | 默认值      |
| ---- | ---------------- | ---------------- | ----------- |
| type | `TypographyType` | 设置块引用的类型 | `'default'` |

### OL 属性

| 名称 | 类型                              | 说明           | 默认值 |
| ---- | --------------------------------- | -------------- | ------ |
| type | `'a' \| 'A' \| 'i' \| 'A' \| '1'` | 设置序号的类型 | `'1'`  |

### UL 属性

| 名称       | 类型     | 说明                 | 默认值     |
| ---------- | -------- | -------------------- | ---------- |
| list-style | `string` | 设置 `li` 的标记类型 | `'circle'` |
