<template>
  <div class="text-center">
    <h2 class="mt-6 text-center">Create a new account</h2>
  </div>
  <form class="mt-8 space-y-6">
    <base-email-input></base-email-input>
    <base-password-input></base-password-input>
    <base-password-input></base-password-input>
    <button @click="clickEvent" class="relative w-full flex">Sign up</button>
  </form>
</template>

<script setup>
const form = ref({
  email: '',
  confirmPassword: '',
  password: ''
});

const clickEvent = () => {
  console.log(form);
};
</script>
