<template>
  <template v-for="(token, key) in transitionToken">
    <div class="text-black mb-4">{{ `transition-${key}` }}</div>
    <div
      class="w-full h-24 bg-slate-300"
      @mouseenter="toggleIsTransition(true)"
      @mouseleave="toggleIsTransition(false)"
    >
      <div
        class="w-24 h-full bg-blue-300 relative"
        :style="{ transition: token.value, ...transformStyle }"
      ></div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { CSSProperties } from "vue";
import { refToken } from "../logic";

const [isTransition, toggleIsTransition] = useToggle(false);
const transitionToken = computed(() => {
  return refToken.value.transition || {};
});
const transformStyle = computed<CSSProperties>(() => {
  return {
    left: isTransition.value ? "100%" : "0",
  };
});
</script>
