<template>
  <template v-for="(token, key) in easeToken">
    <div class="text-black mb-4">{{ `ease-${key}` }}</div>
    <EaseTokenItem :transition-token="token"></EaseTokenItem>
  </template>
</template>

<script lang="ts" setup>
import { refToken, flatToken } from "../logic";
import EaseTokenItem from "./EaseTokenItem.vue";

const easeToken = computed(() => {
  return flatToken(refToken.value.ease || {});
});
</script>
