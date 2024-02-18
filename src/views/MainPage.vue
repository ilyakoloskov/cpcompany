<template>
  <section class="main-screen">
    <base-picture
      class="main-screen__picture"
      :url="mainScreenImg"
    />
    <base-container class="main-screen__container">
      <base-flex
        class="main-screen__wrapper"
        column
        justify-center
        align-center
      >
        <h1 class="main-screen__title h1">SS024 ADV Campaign</h1>
        <base-button type="link">Discover more</base-button>
      </base-flex>
    </base-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseFlex from '@/components/base/BaseFlex.vue'
import BasePicture from '@/components/base/BasePicture.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import mainScreenImg from '@/assets/images/main-screen.jpeg'

export default defineComponent({
  name: 'MainPage',

  components: {
    BaseContainer,
    BasePicture,
    BaseFlex,
    BaseButton,
  },

  data() {
    return {
      mainScreenImg,
    }
  },
})
</script>

<style lang="scss">
.main-screen {
  position: relative;

  &__wrapper {
    min-height: calc(100dvh - 60px);
  }

  &__picture {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;

    z-index: -1;
  }

  &__title {
    color: var(--primary);
    margin-bottom: 35px;
  }
}
</style>
