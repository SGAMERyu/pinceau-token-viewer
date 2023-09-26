<template>
  <div class="flex w-full">
    <nav class="w-200px">菜单</nav>
    <section class="flex-1"><RouterView /></section>
  </div>
</template>

<script lang="ts" setup>
import { rpc } from "./logic";

async function init() {
  const res = await rpc.token();
  console.log(res);
}

init();
</script>
