<script setup lang="ts">
  const onClick = () => {
    console.log('Mesa Desing System')
  }
</script>

<template>
  <button @click="onClick"><slot /></button>
</template>

<style scoped></style>
