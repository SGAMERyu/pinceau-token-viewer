<template>
  <nav class="w-200px list-none">
    <li
      v-for="name in tokenNameList"
      :key="name"
      class="mb-4 lg:text-sm hover:text-sky-500 cursor-pointer"
    >
      {{ name }}
    </li>
  </nav>
</template>

<script lang="ts" setup>
import { tokenNameList } from "../logic";
</script>
