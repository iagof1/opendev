<template>
  <div>
    <div class="relative">
      <input :type="password" placeholder="Password" />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <EyeSlashIcon class="text-gray-600" aria-hidden="true" />
      </div>
    </div>
    <p class="mt-2 text-sm text-red-600">Not a valid password.</p>
  </div>
</template>

<script setup>
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const showPassword = ref(false);
</script>
