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
  <button @click="onClick">{{ label }}<slot /></button>
</template>

<style scoped></style>
