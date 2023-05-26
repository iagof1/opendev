import { defineStore } from "pinia"

export const useUserStore = defineStore('userStore', () => {
  const friends = ref([
    {
      id: 1,
      name: "Mateus Santana",
      profilePic: 'mateus-pic.jpg'
    },
    {
      id: 2,
      name: "Vinicius Souza",
      profilePic: 'vinicius-pic.jpg'
    }
  ])

  return {
    friends
  }
})