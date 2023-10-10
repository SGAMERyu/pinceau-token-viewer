<template>
  <div class="flex flex-wrap gap-8">
    <div
      v-for="(token, key) in fontWeightToken"
      class="flex justify-center items-center flex-col"
    >
      <TypeFace :style="{ fontWeight: token.raw }" class="text-2xl"></TypeFace>
      <span class="text-lg mt-4">{{ key }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TypeFace from "../components/TypeFace.vue";
import { refToken } from "../logic";

const fontWeightToken = computed(() => {
  return refToken.value.fontWeight || {};
});
</script>
