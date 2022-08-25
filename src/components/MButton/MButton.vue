<script setup lang="ts">
  import { computed } from 'vue'
  import styles from './MButton.module.css'

  type Props = {
    label: string
    primary?: boolean
  }

  const props = defineProps<Props>()

  const btnStyle = computed(() => {
    return props.primary ? styles.primary : styles.default
  })

  function onClick() {
    console.log('Mesa Design System')
  }
</script>

<template>
  <button :class="[styles.btn, btnStyle]" @click="onClick">
    <span>{{ props.label }}</span>
  </button>
</template>
