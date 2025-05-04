<template>
  <div style="position: relative; padding-inline-start: 16px">
    <div
      style="
        position: absolute;
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        width: 16px;
        background-color: var(--chi-fill-color-humble);
      "
    ></div>
    <chi-h4 marker top>标题</chi-h4>
    <chi-h4 marker type="success">标题</chi-h4>
    <chi-h4 marker aligned type="error">标题</chi-h4>
    <chi-h4 marker aligned marker-type="primary">标题</chi-h4>
    <chi-h4 marker type="info" marker-type="warning">标题</chi-h4>
    <chi-h4 marker marker-type="pink">标题</chi-h4>
  </div>
</template>
