// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jinan-food-project/",
  plugins: [vue()],
});
