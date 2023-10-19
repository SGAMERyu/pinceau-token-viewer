<template>
  <ul class="flex flex-col">
    <li v-for="(token, key) in mediaToken">
      {{ `zindex-${key}` }}: {{ token.value }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const mediaToken = computed(() => {
  return refToken.value.media || {};
});
</script>
