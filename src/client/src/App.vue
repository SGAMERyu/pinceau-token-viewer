<template>
  <div class="max-w-360 mx-auto px-4 sm:px-6 md:px-8">
    <header class="font-extrabold text-slate-900 text-2xl sm:text-3xl mb-6">
      Pinceau Token viewer
    </header>
    <div class="flex w-full">
      <TokenNav />
      <TokenList />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchToken } from "./logic";
import TokenNav from "./components/TokenNav.vue";
import TokenList from "./components/TokenList.vue";

fetchToken();
</script>
