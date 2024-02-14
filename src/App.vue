<script setup lang="ts">
  import { useGlobalStore } from '@/store/globalStore';

  const store = useGlobalStore();
</script>

<template>
  {{ store.products }}
</template>

<style lang="scss">
  @import '@/assets/style/variables.scss';

  body {
    background-color: $bg-color;
  }
</style>
