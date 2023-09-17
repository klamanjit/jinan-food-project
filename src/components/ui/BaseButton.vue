<script setup>
const props = defineProps({
  to: {
    type: String,
    required: false,
    default: "/",
  },

  link: {
    type: Boolean,
    required: false,
    default: false,
  },

  mode: {
    type: String,
    required: false,
    default: "base-button",
  },
});
</script>

<template>
  <button :class="mode" v-if="!link">
    <slot> </slot>
  </button>

  <RouterLink :to="to" :class="mode" v-else>
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.base-button {
  @apply font-semibold py-2 px-4 bg-orange-950 text-orange-50 rounded-lg hover:bg-orange-50 hover:text-orange-950  mr-1 transition-all duration-300 ease-in;
}

.base-button-outline {
  @apply font-semibold py-2 px-4 bg-orange-50  text-orange-950 border border-orange-950 rounded-lg mr-1;
}

.base-button-icon {
  @apply font-semibold py-2 px-4 hover:text-orange-50 rounded-lg transition-all duration-300 ease-in;
}
</style>
