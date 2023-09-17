<script setup>
import { provide, ref } from "vue";

// hero-section
import img1 from "../../assets/home/hero/1.jpg";
import img2 from "../../assets/home/hero/2.jpg";
import img3 from "../../assets/home/hero/3.jpg";
import img4 from "../../assets/home/hero/4.jpg";
import img5 from "../../assets/home/hero/5.jpg";

// type-section
import type1 from "../../assets/home/type/1.jpg";
import type2 from "../../assets/home/type/2.jpg";
import type3 from "../../assets/home/type/3.jpg";

// Top menu - section
import top1 from "../../assets/home/topMenu/1.jpg";
import top2 from "../../assets/home/topMenu/2.jpg";

// Drink Menu-section
import drink1 from "../../assets/home/drinkMenu/1.jpg";
import drink2 from "../../assets/home/drinkMenu/2.jpg";
import drink3 from "../../assets/home/drinkMenu/3.jpg";
import drink4 from "../../assets/home/drinkMenu/4.jpg";

const images = ref([img1, img2, img3, img4, img5]);

const types = ref([
  {
    id: "1",
    title: `thai soup`,
    url: type1,
    description: `Thai soups are a delightful fusion of sweet, sour, salty, and spicy flavors, offering a perfect balance that captivates the palate. Iconic dishes like Tom Yum and Tom Kha feature fragrant herbs, such as lemongrass and kaffir lime leaves, while Tom Yum Goong Nam Khon adds a creamy touch with coconut milk. These aromatic and comforting soups, along with various regional variations, showcase Thailand's culinary expertise and its use of fresh ingredients to create enticing and soul-warming dishes.`,
  },
  {
    id: "2",
    title: `thai deep-fry`,
    url: type2,
    description: `Thai deep-frying, known as "ทอด" (thot) in Thai, is a beloved cooking method that results in crispy and flavorful dishes. From savory options like "ขนมปังทอด" (khanom pang thot) - Thai-style deep-fried bread, and "ทอดมันกุ้ง" (thot mun goong) - shrimp cakes, to delightful sweets like "กล้วยทอด" (gluay thot) - deep-fried banana fritters, and "ขนมครกทอด" (khanom krok thot) - deep-fried coconut rice cakes, Thai deep-frying offers a delightful array of textures and tastes that tantalize the taste buds. The technique showcases Thai cuisine's ability to elevate everyday ingredients into delectable and crispy treats that are cherished by locals and visitors alike.`,
  },
  {
    id: "3",
    title: `thai stir-fry`,
    url: type3,
    description: `Stir-frying, known as "ผัด" (phat) in Thai, is a fundamental and beloved cooking technique in Thai cuisine. This method involves quickly cooking small pieces of ingredients in a hot wok or skillet with a small amount of oil, resulting in dishes bursting with flavor and vibrant colors. Iconic dishes like "ผัดไทย" (pad Thai) with its tangy tamarind sauce and "ผัดกระเพรา" (pad kra pao) featuring Thai basil and chilies exemplify the artful balance of ingredients and seasonings in Thai stir-fries. Whether it's a protein, vegetables, or noodles, stir-frying showcases the freshness and delectable taste of each component, making it an integral part of Thailand's culinary tradition.`,
  },
]);

const topMenu = ref([
  {
    id: "a1",
    name: "Salmon fry-rice",
    detail: "The perfect combination of salmon and unique fry-rice",
    price: 80,
    url: top1,
  },
  {
    id: "a2",
    name: "Shrimp fry-rice",
    detail: "The perfect combination of shrimp and unique fry-rice",
    price: 60,
    url: top2,
  },
]);

const drinkMenu = ref([
  {
    id: "b1",
    name: "Coco Milk",
    detail:
      "Coconut milk boasts a delicate, subtly sweet flavor with a creamy and satisfying texture that adds a touch of tropical indulgence to every bite.",
    subDetail: {
      sub1: "Coco",
      sub2: "Milk",
      sub3: "Ice",
    },
    price: 45,
    url: drink1,
  },

  {
    id: "b2",
    name: "Thai Tea Milk",
    detail:
      "Thai tea milk is a sweet and creamy beverage made by blending strong black tea with condensed milk and flavored with spices like star anise and often served over ice.",
    subDetail: {
      sub1: "Thai Tea",
      sub2: "Milk",
      sub3: "Ice",
    },
    price: 45,
    url: drink2,
  },

  {
    id: "b3",
    name: "Coconut Milk Drink",
    detail:
      "Coconut milk drink is a refreshing beverage made from the liquid extracted from grated coconut flesh, often sweetened and served cold as a creamy and tropical-flavored drink.",
    subDetail: {
      sub1: "Coconut",
      sub2: "Milk",
      sub3: "Ice",
    },
    price: 45,
    url: drink3,
  },
  {
    id: "b4",
    name: "Orage Drink",
    detail:
      "Orange drink is a citrusy and refreshing beverage made by blending fresh orange juice with water or carbonated water, sometimes sweetened, and typically served chilled.",
    subDetail: {
      sub1: "Orange",
      sub2: "Sugar",
      sub3: "Ice",
    },
    price: 45,
    url: drink4,
  },
]);

// Shopping cart

const carts = ref([]);

provide("drinkMenu", drinkMenu);
provide("topMenu", topMenu);
provide("images", images);
provide("types", types);
provide("carts", carts);
</script>

<template>
  <slot></slot>
</template>
