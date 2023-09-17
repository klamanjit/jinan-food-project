<script setup>
import { computed, inject, ref } from "vue";

const images = inject("images");

const userToken = ref(null);
userToken.value = localStorage.getItem("token");

const isUserToken = computed(() => {
  return !!userToken.value;
});
</script>

<template>
  <section class="mb-16 bg-gradient-to-r from-orange-500 to-orange-600">
    <div class="2xl:container 2xl:mx-auto">
      <main
        class="sm:flex sm:flex-col lg:grid lg:grid-cols-2 px-10 gap-6 py-16"
      >
        <div class="flex flex-col justify-center">
          <h1 class="text-left font-bold text-4xl mb-9">
            Exploring the Flavors of Thailand
          </h1>
          <p class="mb-6 text-slate-900">
            Thai food is an enticing fusion of bold flavors, aromatic herbs, and
            vibrant colors. From iconic dishes like Pad Thai and Green Curry to
            the aromatic Tom Yum soup, Thai cuisine offers a harmonious balance
            of sweet, sour, salty, and spicy tastes. Communal dining and
            exquisite presentation add to the enchanting experience, making Thai
            food a truly unforgettable culinary journey.
          </p>
          <div class="mb-6">
            <base-button
              v-if="!isUserToken"
              link
              to="/login"
              mode="base-button-outline"
              >Log in</base-button
            >
            <base-button link to="/" mode="base-button"
              >Learn more &darr;</base-button
            >
          </div>

          <div class="flex flex-row">
            <img
              v-for="img in images"
              :key="img"
              :src="img"
              alt="Food image"
              class="w-10 h-10 object-cover rounded-full border border-orange-950 -ml-3"
            />
          </div>
        </div>
        <div>
          <div class="flex justify-center items-center rounded-md">
            <img
              src="../../assets/home/hero/hero2.jpg"
              alt="logo"
              class="w-full rounded-md"
            />
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
