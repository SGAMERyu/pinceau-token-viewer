<template>
  <div class="flex flex-wrap gap-6">
    <div v-for="(token, key) in RadiiToken">
      <h2 class="token-name">{{ key }}</h2>
      <div
        class="bg-purple-600 w-24 h-24"
        :style="{ borderRadius: token.value }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const RadiiToken = computed(() => {
  return refToken.value.radii || {};
});
</script>
