<template>
  <div class="w-64 bg-white rounded-lg shadow p-6 overflow-y-scroll">
    <h3 class="text-xl font-bold mb-4">Friends</h3>
    <ul>
      <li
        v-for="friend in friends"
        :key="friend.id"
        class="cursor-pointer hover:bg-gray-100 p-2 rounded"
        @click="$emit('select', friend)"
      >
        <img
          class="h-8 w-8 rounded-full inline"
          :src="friend.profilePic"
          alt=""
        />
        <span class="ml-2">{{ friend.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from '~/store';
import { storeToRefs } from 'pinia';

const store = useUserStore();
const { friends } = storeToRefs(store);
</script>
