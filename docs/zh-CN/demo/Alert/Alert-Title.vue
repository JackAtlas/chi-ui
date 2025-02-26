<template>
  <div style="max-width: 600px">
    <chi-alert title="警告标题">警告提示的内容</chi-alert>
    <chi-alert title="警告标题" type="info">警告提示的内容</chi-alert>
    <chi-alert title="警告标题" type="success">警告提示的内容</chi-alert>
    <chi-alert type="warning">
      <template #title>警告标题</template>
      警告提示的内容
    </chi-alert>
    <chi-alert type="error">
      <template #title>警告标题</template>
      警告提示的内容
    </chi-alert>
  </div>
</template>
