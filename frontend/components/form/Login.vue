<!-- LoginForm.vue -->
<template>
  <div class="text-center">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-[#7D84B2]">
        Sign in to your account
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <div class="rounded-md shadow-sm -space-y-px">
        <n-space vertical>
          <n-input v-model:value="form.email" type="text" placeholder="Email" />
          <n-input
            v-model:value="form.password"
            type="password"
            show-password-on="click"
            placeholder="Password"
            :maxlength="16"
          />
        </n-space>
      </div>
      <div>
        <n-button @click="clickEvent" class="relative w-full flex bg-[#7D84B2]">
          Sign in
        </n-button>
      </div>
    </form>
  </template>

<script setup>

const form = ref({
  email: '',
  password: ''
})

const clickEvent = (e) => {
  console.log(form);
}
</script>