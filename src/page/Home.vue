<script setup>
import HeroSection from "../components/home/HeroSection.vue";
import TypeSection from "../components/home/TypeSection.vue";
import TopMenuSection from "../components/home/TopMenuSection.vue";
import DrinkMenuSection from "../components/home/DrinkMenuSection.vue";
import Footer from "../components/home/Footer.vue";
import { onMounted, ref } from "vue";

const rootHeroSection = ref(null);
const isHeroSectionIntersected = ref(true);

const option = ref({
  root: null,
  threshold: 0,
  rootMargin: "-100px",
});

const callBack = ref((entries) => {
  if (entries[0] && entries[0].isIntersecting) {
    isHeroSectionIntersected.value = true;
  } else {
    isHeroSectionIntersected.value = false;
  }
});

onMounted(() => {
  const observer = new IntersectionObserver(callBack.value, option.value);
  observer.observe(rootHeroSection.value);
});
</script>

<template>
  <div>
    <the-header :class="{ myNavFixed: !isHeroSectionIntersected }"></the-header>
    <div ref="rootHeroSection">
      <HeroSection></HeroSection>
    </div>

    <div>
      <TypeSection></TypeSection>
    </div>

    <div>
      <TopMenuSection></TopMenuSection>
    </div>

    <div>
      <DrinkMenuSection></DrinkMenuSection>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
.myNavFixed {
  @apply fixed top-0 z-50 opacity-70;
}
</style>
