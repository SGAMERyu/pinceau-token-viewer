<template>
  <ul class="list-none flex flex-col gap-8">
    <li v-for="(token, key) in colorToken">
      <h2
        class="token-name"
      >
        {{ key }}
    </h2>
      <template v-if="hasTokenValue(token)">
        <div
          class="flex flex-col md:flex-row overflow-hidden relative md:space-x-1 space-y-1 md:space-y-0 rounded-lg"
        >
          <div
            class="h-14 md:h-36 w-full rounded-lg p-2 md:p-4 flex justify-center flex-col relative"
            :style="{ backgroundColor: token.raw as string }"
          >
            <div
              class="px-4 md:px-0 md:mt-auto cursor-pointer flex items-center justify-between md:block"
            >
              <div>{{ token.raw }}</div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0"
        >
          <div
            class="flex flex-col md:flex-row overflow-hidden relative md:space-x-1 space-y-1 md:space-y-0 rounded-lg"
            v-for="(value, key) in (token as any as Record<string, DesignToken>)"
          >
            <div
              class="h-14 md:h-36 w-full rounded-lg p-2 md:p-4 flex justify-center flex-col relative"
              :style="{ backgroundColor: parseColor(refToken, value.raw) }"
            >
              <div
                class="px-4 md:px-0 md:mt-auto cursor-pointer flex items-center justify-between md:block text-sm"
              >
                <div>{{ key }}</div>
                <div>{{ parseColor(refToken, value.raw) }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { DesignToken } from "../../../types";
import { parseColor, refToken } from "../logic";

const colorToken = computed(() => {
  return refToken.value.color || {};
});

function hasTokenValue(token: DesignToken) {
  return Reflect.has(token, "value");
}
</script>
