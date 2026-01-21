<template>
  <div class="outlines-wrapper">
    <h1>comming soon...</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'My Outlines'
  },
  outlines: {
    type: Array,
    default: () => []
  }
})
</script>