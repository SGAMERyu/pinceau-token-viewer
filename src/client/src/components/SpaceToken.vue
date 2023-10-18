<template>
  <div class="flex flex-col">
    <div v-for="(token, key) in SpaceToken" class="mb-4">
      <h2 class="token-name">{{ `space-${key}` }}</h2>
      <div
        class="bg-gray-300"
        :style="{ width: token.value, height: token.value }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { refToken } from "../logic";

const SpaceToken = computed(() => {
  return refToken.value.space || {};
});
</script>
