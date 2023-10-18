<template>
  <div class="flex flex-col">
    <div v-for="(token, key) in SizeToken" class="mb-4">
      <h2 class="token-name">{{ `size-${key}` }}</h2>
      <div class="w-full h-24 bg-gray-300 relative">
        <div
          class="absolute left-0 bg-blue-600 h-full"
          :style="{ width: token.value }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const SizeToken = computed(() => {
  return refToken.value.size || {};
});
</script>
