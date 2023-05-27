<template>
  <div class="text-center">
    <h2 class="mt-6 text-center">Sign in to your account</h2>
  </div>
  <form class="mt-8 space-y-6">
    <div class="space-y-6">
      <base-email-input></base-email-input>
      <base-password-input></base-password-input>
    </div>
    <button @click="clickEvent" class="relative w-full flex">Sign in</button>
  </form>
</template>

<script setup>
const form = ref({
  email: '',
  password: ''
});

const clickEvent = (e) => {
  console.log(form);
};
</script>
