<template>
  <TheHeader />
  <!-- MAIN -->
  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { query, collection, getDocs } from 'firebase/firestore'
import { db } from './firebase/index'

// import { mapState } from 'pinia'
// import { useGlobalStore } from '@/store/globalStore'

import TheHeader from '@/components/the/TheHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
  data() {
    return {
      isActive: false,
    }
  },
  created() {
    this.getItems()
  },

  methods: {
    async getItems() {
      const q = query(collection(db, 'products'))
      const response = await getDocs(q)

      response.forEach(item => {
        console.log(item.id, item.data())
      })
    },
  },
})
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
@import '@/assets/scss/variables.scss';

body {
  font-family: var(--font-family-sans-serif);

  background-color: var(--primary);
  min-height: 1000vh;
}
</style>
