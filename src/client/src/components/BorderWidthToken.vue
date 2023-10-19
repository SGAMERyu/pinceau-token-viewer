<template>
  <div class="flex gap-16px flex-wrap">
    <div
      v-for="(token, key) in BorderWidthToken"
      class="w-48 h-48 bg-slate-100 flex items-center justify-center border-solid border-purple-500"
      :style="{ borderWidth: token.value }"
    >
      <div class="text-black text-sm">{{ `border-width-${key}` }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const BorderWidthToken = computed(() => {
  return refToken.value.borderWidth || {};
});
</script>
