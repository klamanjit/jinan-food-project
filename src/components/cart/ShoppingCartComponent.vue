<script setup>
import { computed, inject } from "vue";

const carts = inject("carts");

function addQuantity(cart) {
  cart.quanttity++;
}

function reduceQuantity(cart) {
  if (cart.quanttity < 0 || cart.quanttity === 0) {
    return (cart.quanttity = 0);
  }
  cart.quanttity--;
}

function removeCart(cartIndex) {
  carts.value.splice(cartIndex, 1);
}
</script>

<template>
  <div
    class="grid grid-cols-myCart items-center justify-center gap-2 p-4 border-b border-slate-400"
  >
    <h2 class="text-center text-2xl font-semibold">Description</h2>
    <h2 class="text-center text-2xl font-semibold">Id</h2>
    <h2 class="text-center text-2xl font-semibold">Quantity</h2>
    <h2 class="text-center text-2xl font-semibold">Remove</h2>
    <h2 class="text-center text-2xl font-semibold">Price</h2>
  </div>

  <div
    class="grid grid-cols-myCart items-center justify-center gap-2 p-4 border-b border-slate-400"
    v-for="(cart, idx) in carts"
    :key="cart.id"
  >
    <div class="flex justify-center items-center gap-4">
      <img :src="cart.url" alt="" class="w-32 h-32 object-cover rounded-md" />
      <div>
        <h2 class="text-xl font-medium mb-1">{{ cart.name }}</h2>
        <p class="text-sm sm:hidden lg:block">{{ cart.detail }}</p>
      </div>
    </div>
    <h2 class="text-center">{{ cart.id }}</h2>
    <div class="flex justify-center items-center gap-2">
      <base-button
        class="h-6 w-6 flex justify-center items-center"
        @click="addQuantity(cart)"
        >+</base-button
      >
      <p class="text-center">{{ cart.quanttity }}</p>
      <base-button
        class="h-6 w-6 flex justify-center items-center"
        @click="reduceQuantity(cart)"
        >-</base-button
      >
    </div>

    <div class="flex justify-center">
      <base-button
        @click="removeCart(idx)"
        class="h-6 w-6 flex justify-center items-center"
        >x</base-button
      >
    </div>
    <h2 class="text-center">{{ cart.price * cart.quanttity }} ฿</h2>
  </div>
</template>
