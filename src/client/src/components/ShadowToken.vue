<template>
  <div class="flex gap-8 flex-wrap">
    <div
      v-for="(token, key) in shadowToken"
      class="w-24 h-24 rounded-lg bg-white flex justify-center items-center"
      :style="{
        boxShadow: replaceVariableToTokenValue(refToken, token.value),
      }"
    >
      <span>{{ key }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken, replaceVariableToTokenValue } from "../logic";

const shadowToken = computed(() => {
  return refToken.value.shadow || {};
});
</script>
