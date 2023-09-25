<script setup>
import { onBeforeUnmount } from "vue";

onBeforeUnmount(() => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("tokenExpiration");
});
</script>

<template>
  <store>
    <RouterView></RouterView>
  </store>
</template>

<style scoped></style>
