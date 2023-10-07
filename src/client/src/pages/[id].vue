<template>
  <ul class="list-none flex flex-col gap-8">
    <li v-for="(value, key) in tokenMap">
      <div
        class="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5"
      >
        {{ key }}
      </div>
      <ColorToken :token="tokenMap[key]"></ColorToken>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { refToken, useTokenRouter } from "../logic";
import ColorToken from "../components/ColorToken.vue";

const { activeRoute } = useTokenRouter();

const tokenMap = computed(() => {
  return refToken.value[activeRoute.value];
});
</script>
