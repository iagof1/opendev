<template>
    <NuxtLayout>
      <n-config-provider :theme-overrides="themeOverrides">
        <NuxtPage />
      </n-config-provider>
    </NuxtLayout>
</template>

<script setup>
import { NConfigProvider } from 'naive-ui'

const themeOverrides = {
  common: {
    fontSize: '10px',
    fontSizeMedium: '14px',
    fontWeightStrong: '700',
  },
  Button: {
    color: '#7D84B2',
    textColor: '#F9F9ED',
    textColorHover: '#7D84B2',
    border: '1px solid #9DB2BF',
    borderHover: '1px solid #7D84B2',
  },
  Input: {
    borderHover: '1px solid #7D84B2',
    borderFocus: '1px solid #7D84B2',
  }
  }
</script>