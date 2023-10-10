<template>
  <div class="flex flex-col">
    <template v-for="tokenKey in tokenNameList">
      <div class="mb-4">
        <h1 class="text-2xl text-slate-900 font-bold mb-2">{{ tokenKey }}</h1>
        <component :is="TOKEN_COMPONENT_MAP[tokenKey]"></component>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import ColorToken from "./ColorToken.vue";
import FontToken from "./FontToken.vue";
import { tokenNameList } from "../logic";
import ShadowToken from "./ShadowToken.vue";

const TOKEN_COMPONENT_MAP: any = {
  color: ColorToken,
  font: FontToken,
  shadow: ShadowToken,
};
</script>
