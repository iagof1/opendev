<template>
    <div class="mt-6">
      <h3 class="text-xl font-bold mb-4">Posts</h3>
      <!-- Replace this with a v-for loop once you have actual posts data -->
      <div class="bg-white rounded-lg shadow p-6 mb-4">No posts yet...</div>
    </div>
  </template>

  <script>
  export default {
    props: {
        posts: {
            type: Array,
            default: () => []
        }
    }
  }
  </script>
