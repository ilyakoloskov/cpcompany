<template>
  <picture class="picture">
    <img
      class="picture__img"
      :src="url"
      :alt="alt"
    />
  </picture>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BasePicture',

  props: {
    url: {
      type: String,
      default: 'example.png',
    },
    alt: {
      type: String,
      default: 'C.P. Company',
    },
  },
})
</script>

<style lang="scss">
.picture {
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }
}
</style>
