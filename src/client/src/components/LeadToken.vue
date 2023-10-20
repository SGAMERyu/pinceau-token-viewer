<template>
  <div class="flex flex-col max-w-2xl">
    <div v-for="(token, key) in LeadToken" class="mb-4">
      <h2 class="token-name">{{ key }}</h2>
      <div class="w-full">
        <p
          :style="{ lineHeight: token.value as string }"
          class="m-0 mb-4 text-lg"
        >
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I was a marine biologist.
        </p>
        <div class="token-value">line height {{ token.value }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { refToken } from "../logic";

const LeadToken = computed(() => {
  return refToken.value.lead || {};
});
</script>
