<script setup>
import { ref, computed, inject } from "vue";
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
import { useRouter } from "vue-router";

const carts = inject("carts");
const router = useRouter();

const cartsLength = computed(() => {
  return carts.value.length;
});

const isCarts = computed(() => {
  return !!carts.value.length;
});

const userToken = ref(null);
userToken.value = localStorage.getItem("token");

const isUserToken = computed(() => {
  return !!userToken.value;
});

function removeUserToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("tokenExpiration");

  carts.value.length = 0;

  router.push("/login");
}
</script>

<template>
  <header class="header">
    <div class="ml-3">
      <img
        src="../../assets/home/hero/Jinan.png"
        alt="logo"
        class="w-11 h-11 object-cover rounded-full shadow-md"
      />
    </div>

    <div>
      <base-button
        link
        to="/cart"
        mode="base-button-icon"
        class="flex justify-center items-center gap-2 relative"
      >
        <span
          v-if="isCarts"
          class="absolute top-0 -left-4 w-6 h-6 text-center bg-orange-400 rounded-full"
          >{{ cartsLength }}</span
        >
        <ShoppingCartIcon class="h-6 w-6"></ShoppingCartIcon>
      </base-button>
    </div>

    <nav>
      <ul>
        <base-button mode="base-button" link to="/home">Home</base-button>
        <base-button
          mode="base-button-outline"
          link
          to="/login"
          v-if="!isUserToken"
          >LogIn</base-button
        >
        <base-button
          mode="base-button-outline"
          link
          to="/login"
          @click="removeUserToken"
          v-else
          >LogOut</base-button
        >
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply w-full h-20 flex flex-row justify-between  items-center px-2 py-4 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out;
}
</style>
