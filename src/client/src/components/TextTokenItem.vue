<template>
  <p class="m-0 mb-4 text-lg" :style="textStyle">
    So I started to walk into the water. I won't lie to you boys, I was
    terrified. But I pressed on, and as I made my way past the breakers a
    strange calm came over me. I don't know if it was divine intervention or the
    kinship of all living things but I tell you Jerry at that moment, I was a
    marine biologist.
  </p>
  <div class="token-value flex gap-8px">
    <span v-for="(value, key) in textStyle" :key="key">
      {{ key }} {{ value }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { DesignToken } from "../../../types";
import { replaceVariableToTokenValue, refToken } from "../logic";

interface Props {
  textStyleToken: DesignToken;
}
const props = defineProps<Props>();

const textStyle = computed(() => {
  const result: Record<string, string> = {};
  Object.entries(props.textStyleToken).forEach(([key, textToken]) => {
    result[key] = replaceVariableToTokenValue(refToken.value, textToken.value);
  });
  return result;
});
</script>
