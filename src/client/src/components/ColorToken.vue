<template>
  <div>
    <template v-if="hasTokenValue">
      <div class="color-container">
        <div
          class="color-item"
          :style="{ backgroundColor: props.token.value as string }"
        ></div>
        <div class="px-0.5">
          <div class="color-title">
            {{ token.variable }}
          </div>
          <div class="color-value">
            {{ token.value }}
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div
        class="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0"
      >
        <div class="relative flex">
          <div class="color-container">
            <div class="color-item"></div>
            <div class="px-0.5"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { DesignToken } from "../../../types";

interface Props {
  token: DesignToken | { [k: string]: DesignToken };
}

const props = defineProps<Props>();

const hasTokenValue = computed(() => {
  return Reflect.has(props.token, "value");
});
</script>
