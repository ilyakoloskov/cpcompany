<template>
  <div
    :class="[
      'grid',
      {
        [`grid_col-${column}`]: column,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseGrid',

  props: {
    column: {
      type: [Number],
    },
  },
})
</script>

<style lang="scss">
@for $i from 1 to 12 {
  $colum: $i + 1;
  $gap: $i * 5;

  .grid_col-#{$colum} {
    grid-template-columns: repeat($colum, 1fr);
    gap: $gap + px;
  }
}
.grid {
  display: grid;
}
</style>
