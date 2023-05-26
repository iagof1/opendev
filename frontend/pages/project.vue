<template>
  <div class="bg-gray-100 p-4">
    <!-- Cover photo -->
    <img class="rounded-lg object-cover h-64 w-full mb-4" src="/path/to/cover.jpg" alt="Cover Photo">

    <!-- Group name and description -->
    <div class="bg-white rounded shadow p-6">
      <!-- Group profile photo -->
      <div class="mb-4">
        <img class="h-24 w-24 rounded-full mx-auto" src="/path/to/profile.jpg" alt="Profile Photo">
      </div>

      <h2 class="text-2xl mb-2 font-bold text-gray-800">{{ name }}</h2>
      <p class="text-gray-700">{{ description }}</p>

      <!-- Join button -->
      <button class="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Join</button>
    </div>

    <!-- Project posts -->
    <div class="mt-4 bg-white rounded shadow p-6">
      <h3 class="text-xl mb-2 font-bold text-gray-800">Posts</h3>

      <!-- Placeholder for posts, you would replace this with real data -->
      <div class="border-t border-gray-200 pt-2">
        <p class="text-gray-700">No posts yet...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "loggedin",
});
const name = ref('Awesome Project');
const description = ref('This is an awesome open source project');
</script>
