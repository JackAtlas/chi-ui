<template>
  <span style="margin-inline-end: 10px">Small:</span>
  <chi-space size="small" inline style="max-width: 150px">
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
  </chi-space>
  <br />
  <br />
  <span style="margin-inline-end: 10px">Default:</span>
  <chi-space size="default" inline style="max-width: 160px">
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
  </chi-space>
  <br />
  <br />
  <span style="margin-inline-end: 10px">Large:</span>
  <chi-space size="large" inline style="max-width: 180px">
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button></chi-space
  >
  <br />
  <br />
  <span style="margin-inline-end: 10px">Custom:</span>
  <chi-space :size="[20, 16]" inline style="max-width: 180px">
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button></chi-space
  >
  <br />
  <br />
  <span style="margin-inline-end: 10px">Custom:</span>
  <chi-space :size="24" inline style="max-width: 180px">
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button>
    <chi-button>按钮</chi-button></chi-space
  >
</template>
