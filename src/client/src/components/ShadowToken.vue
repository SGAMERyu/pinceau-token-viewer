<template>
  <div class="flex gap-8 flex-wrap">
    <div
      v-for="(token, key) in shadowToken"
      class="w-24 h-24 rounded-lg bg-white flex justify-center items-center"
      :style="{
        boxShadow: replaceVariableToken(refToken, token.value as string),
      }"
    >
      <span>{{ key }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken, replaceVariableToken } from "../logic";

const shadowToken = computed(() => {
  return refToken.value.shadow || {};
});
</script>
