<template>
  <div
    :style="style"
    class="min-w-24 min-h-24 w-max h-max flex justify-center items-center border border-solid border-slate-300 rounded-lg p-4"
  >
    Aa
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";

interface Props {
  style: CSSProperties;
}

defineProps<Props>();
</script>
