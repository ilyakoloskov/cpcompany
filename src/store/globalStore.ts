import { defineStore } from "pinia";

export const useGlobalStore = defineStore('GlobalStore', {
  state: () => {
    return {
      products: [
        {
          id: 1,
          title: '50 Fili Gum Hooded Jacket'
        },
      ]
    }
  },
})