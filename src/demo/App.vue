<template>
  <div class="demo-app">
    <div class="demo-content">
      <Outlines
        title="My Outlines"
        :outlines="outlines"
        @create="createNewOutline"
        @update="updateOutline"
        @save="saveOutline"
        @delete="deleteOutline"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Outlines from '../components/Outlines.vue'
</script>

<style scoped>
.demo-app {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 40px 24px;
}

.demo-content {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
