<template>
  <div class="flex flex-col max-w-2xl">
    <div v-for="(token, key) in letterSpacingToken" class="mb-4">
      <h2 class="token-name">{{ key }}</h2>
      <div class="w-full">
        <p
          :style="{ letterSpacing: token.raw as string }"
          class="m-0 mb-4 text-lg"
        >
          The quick brown fox jumped over the lazy dog.
        </p>
        <div class="color-title">letter spacing is {{ token.raw }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const letterSpacingToken = computed(() => {
  return refToken.value.letterSpacing || {};
});
</script>
