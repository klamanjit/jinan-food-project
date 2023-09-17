<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// style Form && Dialog

const caption = ref("Log in");
const isDialog = ref(false);
const error = ref(null);

function switchCaption() {
  if (caption.value === "Log in") {
    caption.value = "Sign up";
  } else {
    caption.value = "Log in";
  }
}

function closeDialog() {
  isDialog.value = false;
}

const switchSubmitCaption = computed(() => {
  if (caption.value === "Log in") {
    return "Signup instead";
  } else {
    return "Login instead";
  }
});

// Form Validation

const userEmail = ref(null);
const userPassword = ref(null);

const isFormValidated = computed(() => {
  if (
    !userEmail.value ||
    !userEmail.value.includes("@") ||
    userPassword.value.length < 6
  ) {
    return false;
  } else {
    return true;
  }
});

// Form submition

let timer;

async function formSubmited() {
  if (!isFormValidated.value) {
    isDialog.value = true;
  }

  // Auth
  try {
    let url = ``;
    if (caption.value === "Sign up") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCC_jl5-L7Yb1JjF8wEd9FnIdPj3E-r5jc`;
    }
    if (caption.value === "Log in") {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCC_jl5-L7Yb1JjF8wEd9FnIdPj3E-r5jc`;
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail.value,
        password: userPassword.value,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      error.value = responseData.error.message || "Failed to fetch";
      isDialog.value = true;
      return;
    }

    const expiredToken = responseData.expiresIn * 1000;
    // const expiredToken = 5000;

    const expiredTokenDate = new Date().getTime() + expiredToken;

    // local storage
    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expiredTokenDate);

    // auto back to home-page

    router.replace("/home");

    timer = setTimeout(autoLogout, expiredToken);
  } catch (err) {
    console.error(err);
  }
}

// Log out

function autoLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("tokenExpiration");

  router.push("/login");

  clearTimeout(timer);
}
</script>

<template>
  <section class="bg-orange-50 h-screen py-16">
    <base-dialog :show="isDialog" title="Error Jaa" @close="closeDialog">
      <p>{{ error }}</p>
    </base-dialog>

    <div>
      <base-card
        class="grid grid-cols-myLogin gap-2 bg-gradient-to-r from-orange-500 to-orange-600"
      >
        <div
          class="flex flex-col items-center justify-center gap-2 p-4 bg-orange-950 bg-opacity-40 rounded-md"
        >
          <img
            src="../../assets/home/hero/Jinan3.0 .png"
            alt="logo"
            class="rounded-md"
          />
          <base-button type="button" @click="switchCaption">
            {{ switchSubmitCaption }}</base-button
          >
        </div>

        <form
          @submit.prevent="formSubmited"
          class="p-4 bg-orange-950 bg-opacity-40 rounded-md"
        >
          <div class="my-2 mx-0">
            <label
              for="email"
              class="block mb-2 text-orange-50 text-lg font-bold"
              >Email:</label
            >
            <input
              type="email"
              id="email"
              class="my-input"
              v-model.trim="userEmail"
            />
          </div>

          <div class="my-2 mx-0">
            <label
              for="password"
              class="block mb-2 text-orange-50 text-lg font-bold"
              >Password:</label
            >
            <input
              type="password"
              id="password"
              class="my-input"
              v-model.trim="userPassword"
            />
          </div>

          <div class="mt-4">
            <base-button mode="base-button-outline">{{ caption }}</base-button>
          </div>
        </form>
      </base-card>
    </div>
  </section>
</template>

<style scoped>
.my-input {
  @apply block w-full mb-8 p-1 text-inherit bg-inherit border-b focus:bg-orange-200 focus:outline-none focus:border-b-slate-500;
}
</style>
