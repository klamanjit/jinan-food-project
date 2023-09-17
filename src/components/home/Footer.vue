<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
import {
  PhFacebookLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhGithubLogo,
} from "@phosphor-icons/vue";
</script>

<template>
  <section class="bg-gradient-to-r from-orange-500 to-orange-600">
    <div class="2xl:container 2xl:mx-auto">
      <main class="grid grid-cols-2 px-10 gap-6 py-16">
        <ul class="flex flex-col gap-6">
          <li class="topList-footer">
            <MapPinIcon class="icon-footer"></MapPinIcon>
            <p class="detail-footer">Some web details</p>
          </li>
          <li class="topList-footer">
            <PhoneIcon class="icon-footer"></PhoneIcon>
            <p class="detail-footer">Detail</p>
          </li>
          <li class="topList-footer">
            <EnvelopeIcon class="icon-footer"></EnvelopeIcon>
            <p class="detail-footer">Detail</p>
          </li>
        </ul>

        <ul flex flex-col>
          <li class="mb-6 detail-footer">Header</li>
          <li class="text-base text-orange-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reprehenderit eum vitae modi voluptate illo labore dolores alias
            quasi expedita! Et sequi repellendus deserunt, beatae quasi ut
            fugiat molestiae ad!
          </li>

          <li class="flex items-center gap-2">
            <PhFacebookLogo class="icon-footer"></PhFacebookLogo>
            <PhInstagramLogo class="icon-footer"></PhInstagramLogo>
            <PhLinkedinLogo class="icon-footer"></PhLinkedinLogo>
            <PhGithubLogo class="icon-footer"></PhGithubLogo>
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>

<style scoped>
.icon-footer {
  @apply h-10 w-10 p-1.5 bg-orange-400 fill-orange-50  rounded-full;
}

.topList-footer {
  @apply flex   items-center gap-4;
}

.detail-footer {
  @apply text-lg font-semibold text-orange-200;
}
</style>
