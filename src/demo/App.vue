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