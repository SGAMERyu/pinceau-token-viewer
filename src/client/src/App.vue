<template>
  <header>
    <h1 class="font-extrabold text-slate-900 text-2xl sm:text-3xl">
      Pinceau Token viewer
    </h1>
  </header>
  <div class="flex w-full">
    <nav class="w-200px list-none">
      <li
        v-for="name in tokenNameList"
        :key="name"
        class="mb-4 lg:text-sm hover:text-sky-500 cursor-pointer"
        :class="[
          activeRoute === name
            ? 'text-sky-500 font-semibold'
            : 'text-slate-700',
        ]"
        @click="() => routeToToken(name)"
      >
        {{ name }}
      </li>
    </nav>
    <section class="flex-1"><RouterView /></section>
  </div>
</template>

<script lang="ts" setup>
import { useTokenRouter, tokenNameList } from "./logic";

const { activeRoute, routeToToken } = useTokenRouter();
</script>
