<template>
  <div class="flex flex-wrap gap-16px">
    <div v-for="(token, key) in OpacityToken">
      <div class="text-black text-sm mb-4 text-center">{{ `opacity-${key}` }}</div>
      <div
        class="w-48 h-48 bg-slate-400 flex justify-center items-center"
        :style="{ opacity: token.value }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const OpacityToken = computed(() => {
  return refToken.value.opacity || {};
});
</script>
