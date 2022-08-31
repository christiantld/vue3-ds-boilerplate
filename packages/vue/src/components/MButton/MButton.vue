<script setup lang="ts">
  import { computed } from 'vue'
  import styles from '@mesa/styles/components/MButton.module.css'

  type Props = {
    label: string
    variant: 'primary' | 'secondary' | 'tertiary' | 'default'
    size: 'sm' | 'md' | 'lg' | 'full'
    disabled: boolean
  }

  const props = defineProps<Props>()

  // do not take it seriously. It is just a poorly demo
  const btnStyle = computed(() => {
    return `${styles[props.variant]} ${styles[props.size]} ${
      props.disabled ? styles.disabled : ''
    }`
  })

  function onClick() {
    console.log('Mesa Design System')
  }
</script>

<template>
  <button :class="[btnStyle, styles.btn]" @click="onClick">
    <span>{{ props.label }}</span>
  </button>
</template>
