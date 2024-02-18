<template>
  <div
    :class="[
      'container',
      {
        container_xs: xs,
        container_s: s,
        container_m: m,
        container_fluid: fluid,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseContainer',
  props: {
    xs: Boolean,
    s: Boolean,
    m: Boolean,
    fluid: Boolean,
  },
})
</script>

<style lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  &_xs {
    max-width: 600px;
  }

  &_s {
    max-width: 800px;
  }

  &_m {
    max-width: 1325px;
  }

  &_fluid {
    max-width: 100%;
  }
}
</style>
