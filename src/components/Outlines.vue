<template>
  <div class="outlines-wrapper">
    <h1>{{ title }}</h1>
    <div v-if="userId && workspaceId" class="info">
      <p>User ID: {{ userId }}</p>
      <p>Workspace ID: {{ workspaceId }}</p>
    </div>
    <p v-else class="warning">Missing user or workspace information</p>
    <h2>Coming soon...</h2>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'My Outlines'
  },
  outlines: {
    type: Array,
    default: () => []
  },
  userId: {
    type: String,
    default: null
  },
  workspaceId: {
    type: String,
    default: null
  }
})

// Watch for changes in userId and workspaceId
watch([() => props.userId, () => props.workspaceId], ([newUserId, newWorkspaceId]) => {
  console.log('Outlines package received:', { userId: newUserId, workspaceId: newWorkspaceId })
  // Add your logic here to load data based on userId and workspaceId
})
</script>

<style scoped>
.outlines-wrapper {
  padding: 20px;
}

.info {
  margin: 20px 0;
  padding: 15px;
  background: #f0f0f0;
  border-radius: 8px;
}

.info p {
  margin: 5px 0;
  font-family: monospace;
}

.warning {
  color: #ff6b6b;
  font-weight: bold;
}
</style>