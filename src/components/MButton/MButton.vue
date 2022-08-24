<script setup lang="ts">
  const onClick = () => {
    console.log('Mesa Desing System')
  }

  defineProps({
    label: {
      type: String,
      default: 'Mesa Desing System',
    },
  })
</script>

<template>
  <button class="btn" @click="onClick">{{ label }}<slot /></button>
</template>

<style scoped lang="scss">
  @import './MButton.module.scss';
</style>
