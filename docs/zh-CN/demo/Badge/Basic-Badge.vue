<template>
  <chi-badge is-dot>
    <chi-button>消息</chi-button>
  </chi-badge>
  <chi-badge :content="11" style="margin-inline-start: 8px">
    <chi-button>消息</chi-button>
  </chi-badge>
  <br />
  <br />
  <chi-space>
    <chi-badge :content="12" type="primary"></chi-badge>
    <chi-badge :content="12" type="success"></chi-badge>
    <chi-badge :content="12" type="warning"></chi-badge>
    <chi-badge :content="12" type="info"></chi-badge>
    <chi-badge :content="12" type="disabled"></chi-badge>
  </chi-space>
</template>
