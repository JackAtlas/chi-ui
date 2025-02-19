<template>
  <chi-icon-cloud :images="imageUrls"></chi-icon-cloud>
</template>

<script setup>
const slugs = [
  'typescript',
  'javascript',
  'react',
  'flutter',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'nginx',
  'jest',
  'vuedotjs',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitee',
  'juejin',
  'iconfinder',
]

const imageUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`)
</script>
