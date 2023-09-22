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
    class="phone:hidden lg:grid lg:grid-cols-myCart lg:items-center lg:justify-center gap-2 p-4 border-b border-slate-400"
  >
    <h2 class="text-center text-2xl font-semibold">Description</h2>
    <h2 class="text-center text-2xl font-semibold">Id</h2>
    <h2 class="text-center text-2xl font-semibold">Quantity</h2>
    <h2 class="text-center text-2xl font-semibold">Remove</h2>
    <h2 class="text-center text-2xl font-semibold">Price</h2>
  </div>

  <div
    class="grid grid-cols-myCart items-center justify-center gap-2 phone:p-4 sm:p-4 border-b border-slate-400"
    v-for="(cart, idx) in carts"
    :key="cart.id"
  >
    <div class="flex justify-center items-center gap-4">
      <img
        :src="cart.url"
        alt=""
        class="phone:w-24 phone:h-24 sm:w-32 sm:h-32 object-cover rounded-md"
      />
      <div>
        <h2 class="phone:text-sm lg:text-xl font-medium mb-1">
          {{ cart.name }}
        </h2>
        <p class="text-sm phone:hidden lg:block">{{ cart.detail }}</p>
      </div>
    </div>
    <h2 class="phone:hidden sm:block text-sm text-center">{{ cart.id }}</h2>
    <div
      class="phone:flex phone:flex-col sm:flex-row justify-center items-center phone:gap-1 sm:gap-2"
    >
      <base-button
        class="phone:h-5 phone:w-5 sm:h-6 sm:w-6 flex justify-center items-center text-xs"
        @click="addQuantity(cart)"
        >+</base-button
      >
      <p class="text-center text-sm">{{ cart.quanttity }}</p>
      <base-button
        class="phone:h-5 phone:w-5 sm:h-6 sm:w-6 flex justify-center items-center text-xs"
        @click="reduceQuantity(cart)"
        >-</base-button
      >
    </div>

    <div class="flex justify-center">
      <base-button
        @click="removeCart(idx)"
        class="phone:h-5 phone:w-5 sm:h-6 sm:w-6 flex justify-center items-center text-xs"
        >x</base-button
      >
    </div>
    <h2 class="text-center text-sm">{{ cart.price * cart.quanttity }} ฿</h2>
  </div>
</template>
