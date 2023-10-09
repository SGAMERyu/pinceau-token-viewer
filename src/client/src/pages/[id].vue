<template>
  <ul class="list-none flex flex-col gap-8">
    <li v-for="(value, key) in tokenMap">
      <div
        class="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5 mb-4"
      >
        {{ key }}
      </div>
      <Component :is="TokenComponentMap[activeRoute]" :token="tokenMap[key]"></Component>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { refToken, useTokenRouter } from "../logic";
import ColorToken from "../components/ColorToken.vue";
import FontToken from "../components/FontToken.vue";

const TokenComponentMap: Record<string, any> = {
  color: ColorToken,
  font: FontToken,
};

const { activeRoute } = useTokenRouter();

const tokenMap = computed(() => {
  return refToken.value[activeRoute.value];
});
</script>
