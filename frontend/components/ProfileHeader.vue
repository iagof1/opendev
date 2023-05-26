<template>
    <div class="relative">
      <img class="w-full h-64 object-cover" :src="user.coverPic" alt="Cover photo">
      <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full" :src="user.profilePic" alt="Profile picture">
      <h2 class="absolute bottom-0 mb-4 ml-4 text-2xl font-bold text-white">{{ user.name }}</h2>
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
  }
  </script>
