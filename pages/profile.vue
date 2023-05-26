<template>
  <div class="p-4">
    <profile-header :user="user"></profile-header>
    <profile-details :user="user"></profile-details>
    <user-posts :posts="posts"></user-posts>
  </div>
  </template>

<script setup>
definePageMeta({
  layout: "loggedin",
});
const user = ref({
    name: 'John Doe',
    profilePic: '/path/to/profile.jpg',
    coverPic: '/path/to/cover.jpg',
    bio: 'Software Developer at OpenAI',
    location: 'San Francisco, CA',
  })
const store = useNuxtApp()
const posts = ref([
    // ... fetch posts data
  ])
  </script>
