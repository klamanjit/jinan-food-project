<script setup>
const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: "my-badge-salmon",
  },
});
</script>

<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<style scoped>
.my-badge-salmon {
  @apply font-semibold text-xs bg-orange-400 text-orange-900 rounded-lg inline-block mt-1 mb-4 mr-1 py-1 px-2;
}

.my-badge-shrimp {
  @apply font-semibold text-xs bg-orange-200 text-orange-900 rounded-lg inline-block mt-1 mb-4 mr-1 py-1 px-2;
}

.my-badge-rice {
  @apply font-semibold text-xs bg-yellow-100 text-yellow-900 rounded-lg inline-block mt-1 mb-4 mr-1 py-1 px-2;
}

.my-badge-vegetable {
  @apply font-semibold text-xs bg-green-100 text-green-900 rounded-lg inline-block mt-1 mb-4 mr-1 py-1 px-2;
}

.my-badge-coco {
  @apply font-semibold text-xs bg-amber-950 text-amber-50 rounded-lg inline-block mt-1 mb-4 mr-1 py-1 px-2;
}

.my-badge-milk {
  @apply font-semibold text-xs bg-indigo-50 text-indigo-950 rounded-lg inline-block mt-1 mb-4 mr-1 py-1 px-2;
}

.my-badge-ice {
  @apply font-semibold text-xs bg-sky-950 text-sky-50 rounded-lg inline-block mt-1 mb-4 mr-1 py-1 px-2;
}
</style>
