<script setup>
import { computed, inject, ref } from "vue";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/vue/24/solid";
import { PhCaretCircleLeft, PhCaretCircleRight } from "@phosphor-icons/vue";

const carts = inject("carts");
const drinkMenu = inject("drinkMenu");

function addTocart(drink) {
  const drinkMenu = ref({
    id: drink.id,
    name: drink.name,
    detail: drink.detail,
    quanttity: 1,
    price: drink.price,
    url: drink.url,
  });

  if (carts.value.find((cart) => cart.id === drink.id)) {
    return;
  }

  carts.value.push(drinkMenu.value);
}

const drinkIndex = ref(0);

const drinkIndexValue = computed(() => {
  if (drinkIndex.value < 0) {
    drinkIndex.value = 0;
    return 0;
  }
  if (drinkIndex.value > drinkMenu.value.length - 1) {
    drinkIndex.value = drinkMenu.value.length - 1;
    return drinkMenu.value.length - 1;
  } else {
    return drinkIndex.value;
  }
});

function nextDrink() {
  if (drinkIndex.value > 0 || drinkIndex.value === 0) {
    drinkIndex.value++;
  } else if (drinkIndex.value > drinkMenu.value.length - 1) {
    drinkIndex.value = drinkMenu.value.length - 1;
  }
}

function prevDrink() {
  if (drinkIndex.value < drinkMenu.value.length) {
    drinkIndex.value--;
  } else if (drinkIndex.value < 0) {
    drinkIndex.value = 0;
  }
}
</script>

<template>
  <div class="2xl:container 2xl:mx-auto">
    <section class="px-10 py-10">
      <div>
        <h3 class="phone:text-xs font-semibold">Chapter III</h3>
        <h2 class="phone:text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold">
          Indulge in Our Exclusive Selection of Signature Drinks
        </h2>
      </div>

      <div
        class="sm:px-10 sm:py-10 flex justify-center items-center relative z-0"
      >
        <base-button mode="base-button-icon">
          <ArrowLeftCircleIcon
            @click="prevDrink"
            class="icon-drink-menu"
          ></ArrowLeftCircleIcon>
        </base-button>

        <div
          class="lg:mx-10 px-5 py-5 phone:w-[16rem] sm:w-[24rem] lg:w-[32rem] h-1/3 bg-orange-600 bg-opacity-50 rounded-md relative overflow-hidden shadow-md"
        >
          <div class="my-before"></div>
          <img
            :src="(drinkMenu[drinkIndexValue] || drinkMenu[0]).url"
            alt="drink menu"
            class="w-full h-96 object-cover object-center rounded-md mb-2"
          />

          <h2
            class="sm:text-xl lg:text-2xl font-bold text-orange-50 tracking-wide"
          >
            {{ (drinkMenu[drinkIndexValue] || drinkMenu[0]).name || "" }}
          </h2>
          <base-badge mode="my-badge-coco">{{
            (drinkMenu[drinkIndexValue] || drinkMenu[0]).subDetail.sub1
          }}</base-badge>
          <base-badge mode="my-badge-milk">{{
            (drinkMenu[drinkIndexValue] || drinkMenu[0]).subDetail.sub2
          }}</base-badge>
          <base-badge mode="my-badge-ice">{{
            (drinkMenu[drinkIndexValue] || drinkMenu[0]).subDetail.sub3
          }}</base-badge>
          <br />

          <div class="phone:flex phone:flex-col phone:gap-1 sm:flex-row gap-2">
            <base-button link class="text-center" to="/cart"
              >View Detail</base-button
            >
            <base-button
              mode="base-button-outline"
              @click="addTocart(drinkMenu[drinkIndexValue])"
              >Add to Cart</base-button
            >
          </div>
        </div>
        <base-button mode="base-button-icon">
          <ArrowRightCircleIcon
            @click="nextDrink"
            class="icon-drink-menu"
          ></ArrowRightCircleIcon>
        </base-button>
      </div>

      <div class="text-center">
        <base-button mode="base-button-icon">
          <PhCaretCircleLeft
            @click="prevDrink"
            class="icon-drink-menu-phoneResolution"
          ></PhCaretCircleLeft>
        </base-button>
        <base-button mode="base-button-icon">
          <PhCaretCircleRight
            @click="nextDrink"
            class="icon-drink-menu-phoneResolution"
          ></PhCaretCircleRight>
        </base-button>
      </div>
    </section>
  </div>
</template>

<!-- w-56 h-96 -->

<style scoped>
.my-before {
  @apply before:content-['Special'] text-orange-50 text-base text-center before:w-48 before:h-9 before:bg-orange-500 before:rotate-45 before:absolute before:-right-16 before:top-4;
}

.icon-drink-menu {
  @apply phone:hidden sm:block h-16 w-16 fill-orange-600;
}

.icon-drink-menu-phoneResolution {
  @apply phone:h-8 phone:w-8 fill-orange-600  rounded-full sm:hidden;
}
</style>
