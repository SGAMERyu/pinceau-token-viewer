<template>
  <div class="flex flex-col">
    <template v-for="tokenKey in tokenNameList">
      <div class="mb-6">
        <h1 class="text-2xl text-slate-900 font-bold mb-6">{{ tokenKey }}</h1>
        <component :is="TOKEN_COMPONENT_MAP[tokenKey]"></component>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { tokenNameList } from "../logic";
import ColorToken from "./ColorToken.vue";
import FontToken from "./FontToken.vue";
import ShadowToken from "./ShadowToken.vue";
import FontWeightToken from "./FontWeightToken.vue";
import FontSizeToken from "./FontSizeToken.vue";
import LetterSpacingToken from "./LetterSpacingToken.vue";
import LeadToken from "./LeadToken.vue";

const TOKEN_COMPONENT_MAP: any = {
  color: ColorToken,
  font: FontToken,
  shadow: ShadowToken,
  fontWeight: FontWeightToken,
  fontSize: FontSizeToken,
  letterSpacing: LetterSpacingToken,
  lead: LeadToken
};
</script>
