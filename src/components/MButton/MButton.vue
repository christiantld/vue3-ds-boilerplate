<script setup lang="ts">
  import styles from './MButton.module.css'

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
  <button :class="styles.btn" @click="onClick">
    <span>{{ label }}</span>
  </button>
</template>
