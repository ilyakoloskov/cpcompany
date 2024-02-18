<template>
  <!-- HEADER -->
  <footer class="footer">
    <base-container
      class="footer__container"
      m
    >
    </base-container>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import BaseContainer from '@/components/base/BaseContainer.vue'

import IconLogo from '@/components/icons/IconLogo.vue'

export default defineComponent({
  name: 'TheFooter',
  components: {
    BaseContainer,

    IconLogo,
  },
})
</script>
