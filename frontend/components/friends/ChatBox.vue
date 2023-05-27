<template>
  <div v-if="selectedFriend" class="flex-1 bg-white rounded-lg shadow p-6 ml-4 overflow-y-scroll">
    <h3 class="text-xl font-bold mb-4">Chat with {{ selectedFriend.name }}</h3>
    <div v-for="message in messages" :key="message.id" class="mb-4">
      <div v-if="message.sender === 'me'" class="bg-blue-500 text-white rounded px-2 py-1 text-right self-end">
        {{ message.text }}
      </div>
      <div v-else class="bg-gray-200 text-black rounded px-2 py-1 text-left self-start">
        {{ message.text }}
      </div>
    </div>
    <div v-if="!messages.length">No messages yet...</div>
  </div>
</template>

<script>
export default {
  props: {
    selectedFriend: {
      type: Object,
      default: () => {}
    },
    messages: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>
  /* Flex container to align messages to the start or end */
  .mb-4 {
    display: flex;
  }
</style>
