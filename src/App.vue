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
    <RouterView v-slot="{ Component }">
      <Transition name="route">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </store>
</template>

<style scoped>
.route-enter-from {
  @apply opacity-0 translate-x-[-30px];
}

.route-leave-to {
  @apply opacity-0 translate-x-[30px];
}

.route-enter-active {
  @apply transition-all duration-300 ease-out;
}

.route-leave-active {
  @apply transition-all duration-300 ease-in;
}

.route-enter-to,
.route-leave-from {
  @apply opacity-100 translate-x-0;
}
</style>
