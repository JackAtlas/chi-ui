<template>
  <div style="max-width: 600px">
    <chi-alert closable>
      警告提示的内容
      <template #close>点击关闭</template>
    </chi-alert>
    <chi-alert closable title="警告标题" type="warning">
      警告提示的内容
      <template #close>我知道了</template>
    </chi-alert>
  </div>
</template>
