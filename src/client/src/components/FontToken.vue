<template>
  <div class="flex flex-col">
    <div v-for="(token, key) in fontToken" class="mb-4">
      <h2 class="token-name">{{ key }}</h2>
      <div class="w-full">
        <p
          :style="{ fontFamily: token.raw as string }"
          class="m-0 mb-4 text-lg"
        >
          The quick brown fox jumped over the lazy dog.
        </p>
        <div class="color-title">{{ token.raw }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const fontToken = computed(() => {
  return refToken.value.font || {};
});
</script>
