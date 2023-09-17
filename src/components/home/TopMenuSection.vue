<script setup>
import { inject, ref } from "vue";

const topMenu = inject("topMenu");
const carts = inject("carts");

console.log(carts.value);

function addTocart0() {
  const menu0 = ref({
    id: topMenu.value[0].id,
    name: topMenu.value[0].name,
    detail: topMenu.value[0].detail,
    quanttity: 1,
    price: topMenu.value[0].price,
    url: topMenu.value[0].url,
  });

  if (carts.value.find((cart) => cart.id === topMenu.value[0].id)) {
    return;
  }

  carts.value.push(menu0.value);
}

function addTocart1() {
  const menu1 = ref({
    id: topMenu.value[1].id,
    name: topMenu.value[1].name,
    detail: topMenu.value[1].detail,
    quanttity: 1,
    price: topMenu.value[1].price,
    url: topMenu.value[1].url,
  });

  if (carts.value.find((cart) => cart.id === topMenu.value[1].id)) {
    return;
  }

  carts.value.push(menu1.value);
}
</script>

<template>
  <section class="mb-16 bg-orange-600">
    <div class="2xl:container 2xl:mx-auto">
      <main
        class="sm:flex sm:flex-col lg:grid lg:grid-cols-2 px-10 gap-6 py-16"
      >
        <div class="col-span-2">
          <h3 class="sm:text-sm font-semibold">Chapter II</h3>
          <h2 class="text-4xl mb-4 font-bold">
            Discover the Exquisite Special Dishes at "Jinan"
          </h2>
        </div>
        <div class="flex flex-col justify-center items-center relative">
          <div class="bg-slate-300/25 px-4 py-4 rounded-md my-card-trasition">
            <div class="w-96 h-56 relative overflow-hidden">
              <div class="my-before"></div>
              <img
                :src="topMenu[0].url"
                alt="special dish2"
                class="my-img object-myPosition0"
              />
            </div>
            <h2 class="text-2xl mt-4 text-orange-100 font-semibold">
              {{ topMenu[0].name }}
            </h2>
            <base-badge mode="my-badge-salmon "> Salmon</base-badge>
            <base-badge mode="my-badge-rice "> Rice</base-badge>
            <base-badge mode="my-badge-vegetable "> Vegetable</base-badge>
            <br />
            <base-button class="" link to="/cart">View Detail</base-button>
            <base-button
              @click="addTocart0"
              class=""
              link
              to="/"
              mode="base-button-outline"
              >Add to Cart</base-button
            >
          </div>
        </div>
        <div class="flex flex-col justify-center items-center relative">
          <div class="bg-slate-300/25 px-4 py-4 rounded-md my-card-trasition">
            <div class="w-96 h-56 relative overflow-hidden">
              <div class="my-before"></div>
              <img
                :src="topMenu[1].url"
                alt="special dish2"
                class="my-img object-myPosition1"
              />
            </div>
            <h2 class="text-2xl mt-4 text-orange-100 font-semibold">
              {{ topMenu[1].name }}
            </h2>
            <base-badge mode="my-badge-shrimp "> Shrimp</base-badge>
            <base-badge mode="my-badge-rice "> Rice</base-badge>
            <base-badge mode="my-badge-vegetable "> Vegetable</base-badge>
            <br />
            <base-button class="" link to="/cart">View Detail</base-button>
            <base-button
              class=""
              link
              to="/"
              mode="base-button-outline"
              @click="addTocart1"
              >Add to Cart</base-button
            >
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped>
.my-img {
  @apply w-full h-full object-cover rounded-md  transition-all duration-300 ease-in;
}

.my-card-trasition {
  @apply transition-all duration-300 ease-in hover:scale-125;
}

.my-before {
  @apply before:content-['sale30%'] text-orange-50 text-lg text-center before:w-48 before:h-9 before:bg-orange-500 before:rotate-45 before:absolute before:-right-16 before:top-4;
}
</style>
