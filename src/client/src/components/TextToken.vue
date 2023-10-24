<template>
  <div v-for="(token, key) in textToken" class="mb-4">
    <h2 class="token-name">{{ key }}</h2>
    <TextTokenItem :text-style-token="token"></TextTokenItem>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";
import TextTokenItem from "./TextTokenItem.vue";

const textToken = computed(() => {
  return refToken.value.text || {};
});
</script>
