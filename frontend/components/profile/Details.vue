<template>
  <div class="bg-white rounded-lg shadow p-6 mt-6">
    <h3 class="text-xl font-bold mb-4">About</h3>
    <p class="mb-2"><strong>Bio:</strong> {{ user.bio }}</p>
    <p><strong>Location:</strong> {{ user.location }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
