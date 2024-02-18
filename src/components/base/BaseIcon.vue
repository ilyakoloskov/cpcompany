<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name">{{ name }}</title>
    <desc :id="name">
      {{ iconDesc }}
    </desc>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseIcon',

  props: {
    name: {
      type: String,
      default: 'С.P. Company',
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
      // viewBox="0 0 18 18"
    },
    color: {
      type: String,
      default: '#000',
    },
    iconDesc: String,
  },
})
</script>
