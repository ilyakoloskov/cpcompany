<template>
  <router-link
    v-if="type === 'link'"
    class="button"
    to="#"
  >
    <slot>
      {{ label }}
    </slot>
  </router-link>
  <button
    v-else
    class="button"
  >
    <span class="button__label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      reqired: true,
      validator(value: string) {
        return ['link', 'button'].includes(value)
      },
      default: 'link',
    },
    label: {
      type: String,
      reqired: true,
      default: 'button',
    },
  },
})
</script>

<style lang="scss">
.button {
  padding: 3px 25px;

  background-color: var(--secondary);
  color: var(--primary);
  cursor: pointer;
  text-align: center;
}
</style>
