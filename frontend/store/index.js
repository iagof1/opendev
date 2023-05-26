import { defineStore } from "pinia"

export const useUserStore = defineStore('userStore', () => {
  const friends = ref([])

  return {
    friends
  }
})