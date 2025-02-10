<template>
  <chi-input type="password" plain-password style="max-width: 300px"></chi-input>
  <br />
  <br />
  <chi-input type="password" plain-password clearable style="max-width: 300px">
    <template #password="{ plain }">
      <chi-icon name="laugh" v-if="plain"></chi-icon>
      <chi-icon name="frown" v-else></chi-icon>
    </template>
  </chi-input>
</template>
