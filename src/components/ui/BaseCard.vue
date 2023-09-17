<template>
  <div class="my-base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.my-base-card {
  @apply px-4 py-4 shadow-lg  max-w-4xl mx-auto rounded-md;
}
</style>
