<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <component :is="loginForm ? FormLogin : FormRegister" />
      <span @click="loginForm = !loginForm">
        {{ loginForm ? 'Create an account' : 'Sign in' }}
      </span>
    </div>
  </div>
</template>

<script setup>
const FormLogin = resolveComponent('FormLogin');
const FormRegister = resolveComponent('FormRegister');
const loginForm = ref(false);
</script>
