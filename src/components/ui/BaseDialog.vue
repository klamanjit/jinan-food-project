<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },

  title: {
    type: String,
    required: false,
  },
});

const emits = defineEmits(["close"]);

function tryClose() {
  emits("close");
}
</script>

<template>
  <div class="my-backdrop" v-if="show" @click="tryClose"></div>
  <dialog open v-if="show" class="my-dialog">
    <header class="bg-orange-700 text-orange-50 w-full p-4 rounded-t-md">
      <slot name="header">
        <h2 class="p-4 font-bold text-xl">{{ title }}</h2>
      </slot>
    </header>

    <section class="p-4 text-base text-slate-700">
      <slot></slot>
    </section>
  </dialog>
</template>

<style scoped>
.my-backdrop {
  @apply fixed top-0 left-0 w-full h-screen z-10 bg-black bg-opacity-75;
}

.my-dialog {
  @apply fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-3/4 sm:w-1/2 lg:w-1/4 z-50 rounded-md;
}
</style>
