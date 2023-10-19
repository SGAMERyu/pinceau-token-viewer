<template>
  <ul class="flex flex-col">
    <li v-for="(token, key) in zIndexToken">
      {{ `zindex-${key}` }}: {{ token.value }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const zIndexToken = computed(() => {
  return refToken.value.zIndex || {};
});
</script>
