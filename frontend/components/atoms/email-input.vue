<template>
  <div>
    <div class="relative">
      <input type="email" placeholder="Email" />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <ExclamationCircleIcon class="text-red-500" />
      </div>
    </div>
    <p class="mb-4 text-sm text-red-600">Not a valid email address.</p>
  </div>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});
</script>
