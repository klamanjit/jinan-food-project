<script setup>
import { inject, computed } from "vue";

const types = inject("types");
</script>

<template>
  <div class="2xl:container 2xl:mx-auto">
    <section>
      <div class="px-10 py-10">
        <h3 class="sm:text-sm font-semibold">Chapter I</h3>
        <h2 class="text-4xl mb-4 font-bold">
          The Art of Thai Food Presentation: Beauty on the Plate
        </h2>
      </div>

      <main v-for="type in types" :key="type.id">
        <div
          v-if="+type.id % 2 !== 0"
          class="sm:border-t-2 lg:border-none lg:grid lg:grid-cols-2 gap-6 px-10 py-10 lg:mb-10"
        >
          <div
            class="flex justify-center items-center relative my-before-class my-after-class"
          >
            <img
              :src="type.url"
              alt="food image"
              class="w-5/12 rounded-md object-cover z-20"
            />
          </div>
          <div>
            <h3 class="text-sm mb-1 font-semibold">{{ type.title }}</h3>
            <h1 class="text-4xl mb-4">0{{ type.id }}</h1>
            <p class="text-base text-slate-900">
              {{ type.description }}
            </p>
          </div>
        </div>

        <div
          v-else
          class="sm:border-t-2 sm:flex sm:flex-col lg:border-none lg:grid lg:grid-cols-2 gap-6 px-10 py-10 lg:mb-10"
        >
          <div>
            <h3 class="text-sm mb-1 font-semibold">{{ type.title }}</h3>
            <h1 class="text-4xl mb-4">0{{ type.id }}</h1>
            <p class="text-base text-slate-900">
              {{ type.description }}
            </p>
          </div>
          <div
            class="flex justify-center items-center relative my-before-class my-after-class"
          >
            <img
              :src="type.url"
              alt="food image"
              class="w-5/12 rounded-md object-cover z-20"
            />
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<style scoped>
.my-before-class {
  @apply before:block before:bg-orange-200 before:w-3/5 before:h-3/5 before:absolute before:top-1/2 before:left-1/2 
  before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:z-0 before:rounded-md;
}

.my-after-class {
  @apply after:block after:bg-orange-100 after:w-2/5 after:h-2/5  after:absolute after:top-1/2 after:left-1/2 
  after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:z-10 before:rounded-md;
}
</style>
