<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
import {
  PhUserFocus,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhGithubLogo,
} from "@phosphor-icons/vue";
</script>

<template>
  <section class="bg-gradient-to-r from-orange-500 to-orange-600">
    <div class="2xl:container 2xl:mx-auto">
      <main
        class="phone:flex phone:flex-col phone:gap-6 phone:items-center phone:justify-center sm:grid sm:grid-cols-2 phone:px-8 phone:py-8 sm:px-10 gap-6 sm:py-16"
      >
        <ul class="flex flex-col justify-center gap-6">
          <li class="topList-footer">
            <MapPinIcon class="icon-footer"></MapPinIcon>
            <p class="detail-footer">Some web details</p>
          </li>
          <li class="topList-footer">
            <PhoneIcon class="icon-footer"></PhoneIcon>
            <p class="detail-footer">++63 3432801</p>
          </li>
          <li class="topList-footer">
            <EnvelopeIcon class="icon-footer"></EnvelopeIcon>
            <p class="detail-footer">manjit.wasit@gmail.com</p>
          </li>
        </ul>

        <ul flex flex-col>
          <li class="phone:mb-2 sm:mb-6 detail-footer">About Me</li>
          <li
            class="phone:text-xs sm:text-base text-orange-300 phone:mb-2 sm:mb-6"
          >
            I am a self-taught programmer who developed this web application. If
            you find this application intriguing, please explore my other web
            projects or connect with me on social media!
          </li>

          <li class="flex items-center gap-2">
            <a href="https://klamanjit.github.io/profile-page-project/">
              <PhUserFocus class="icon-footer"></PhUserFocus>
            </a>

            <a href="https://www.instagram.com/wasit.kla/">
              <PhInstagramLogo class="icon-footer"></PhInstagramLogo>
            </a>

            <a href="https://www.linkedin.com/in/wasit-manjit-414aa225b/">
              <PhLinkedinLogo class="icon-footer"></PhLinkedinLogo>
            </a>
            <a href="https://github.com/klamanjit">
              <PhGithubLogo class="icon-footer"></PhGithubLogo>
            </a>
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>

<style scoped>
.icon-footer {
  @apply phone:h-5 phone:w-5 sm:h-10 sm:w-10 phone:p-0.5 sm:p-1.5 bg-orange-400 fill-orange-50  rounded-full;
}

.topList-footer {
  @apply flex   items-center gap-4;
}

.detail-footer {
  @apply phone:text-sm sm:text-lg font-semibold text-orange-200;
}
</style>
