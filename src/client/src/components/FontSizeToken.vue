<template>
  <div class="flex flex-wrap gap-8">
    <div
      v-for="(token, key) in fontSizeToken"
      class="flex justify-center items-center flex-col"
    >
      <TypeFace :style="{ fontSize: token.value }"></TypeFace>
      <span class="text-lg mt-4">{{ key }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TypeFace from "../components/TypeFace.vue";
import { refToken } from "../logic";

const fontSizeToken = computed(() => {
  return refToken.value.fontSize || {};
});
</script>
