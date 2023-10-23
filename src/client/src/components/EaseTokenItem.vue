<template>
  <div
    class="w-full h-24 bg-slate-300"
    @mouseenter="toggleIsTransition(true)"
    @mouseleave="toggleIsTransition(false)"
  >
    <div
      class="w-24 h-full bg-blue-300 relative"
      :style="{ transition: transitionToken, ...transformStyle }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties } from "vue";

interface Props {
  transitionToken: string;
}

defineProps<Props>();

const [isTransition, toggleIsTransition] = useToggle(false);

const transformStyle = computed<CSSProperties>(() => {
  return {
    left: isTransition.value ? "calc(100% - 6rem)" : "0",
  };
});
</script>
