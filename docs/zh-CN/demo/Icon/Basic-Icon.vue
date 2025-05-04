<template>
  <chi-icon :icon="Dice1"></chi-icon>
  <chi-icon :icon="Dice2"></chi-icon>
  <chi-icon :icon="Dice3"></chi-icon>
  <chi-icon :icon="Dice4"></chi-icon>
  <chi-icon :icon="Dice5"></chi-icon>
  <chi-icon :icon="Dice6"></chi-icon>
  <chi-icon>
    <Dices></Dices>
  </chi-icon>
</template>

<script setup>
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices } from 'lucide-vue-next'
</script>
