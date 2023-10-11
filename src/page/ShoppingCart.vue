<script setup>
import ShoppingCartComponent from "../components/cart/ShoppingCartComponent.vue";
import { computed, inject, ref } from "vue";
import { useRouter } from "vue-router";

const carts = inject("carts");
const userId = localStorage.getItem("userId");
const error = ref(null);

const router = useRouter();

const isUserId = computed(() => {
  return !!userId;
});

const popupMessage = computed(() => {
  if (error.value) {
    return `Something went wrong: ${error.value}`;
  } else {
    return `Thank you! Your order has been sent.`;
  }
});

console.log(isUserId.value);

const isCarts = computed(() => {
  return !!carts.value.length;
});

const totalPrice = computed(() => {
  let totalSum = 0;
  carts.value.forEach((cart) => {
    const sum = cart.quanttity * cart.price;

    totalSum += sum;
  });

  return totalSum;
});

// Register cart to firebase
const cartsValidation = computed(() => {
  if (!isCarts.value || !isUserId.value) {
    return false;
  }

  return true;
});

// token

const userToken = localStorage.getItem("token");

// Handle error
const isError = ref(false);

function closePopup() {
  isError.value = false;

  router.replace("/home");
}

async function registerCarts() {
  if (!cartsValidation.value) {
    // alert("Need to login first and add some product to the cart");

    error.value = "Need to login first and add some product to the cart";
    isError.value = true;
    carts.value = [];
    return;
  }

  console.log("validate");
  const url = `https://jinanrestaurant-16d55-default-rtdb.asia-southeast1.firebasedatabase.app/userId/${userId}.json?auth=${userToken}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        carts: carts.value,
        totalPrice: totalPrice.value,
      }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      isError.value = true;
      throw new Error(responseData.error.message || `failed to fetch`);
    }

    console.log(responseData);
    carts.value = [];
    isError.value = true;
  } catch (err) {
    error.value = err;
  }
}
</script>

<template>
  <div>
    <the-header></the-header>
    <base-dialog :show="isError" title="Important message!" @close="closePopup">
      {{ popupMessage }}
    </base-dialog>

    <base-card class="my-16 relative" v-if="isCarts">
      <ShoppingCartComponent></ShoppingCartComponent>
      <div class="text-end my-4">
        <p>total: {{ totalPrice }} ฿</p>
      </div>
      <base-button class="absolute -bottom-12 right-0" @click="registerCarts"
        >Confirm Purchase</base-button
      >
    </base-card>

    <base-card class="my-16 relative" v-else>
      <h2>
        "Kindly note that your cart is currently empty. To proceed with your
        order, please consider adding items to your cart."
      </h2>
    </base-card>
  </div>
</template>
