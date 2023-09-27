<template>
  <div>福建</div>
</template>

<script lang="ts" setup>
import { useToken, useTokenRouter } from "../logic";

const { refToken } = useToken();
const { activeRoute } = useTokenRouter();

const tokenMap = computed(() => {
  return refToken.value[activeRoute.value];
});
</script>
