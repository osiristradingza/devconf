<template>
  <swiper-container
    :slides-per-view="3"
    :space-between="spaceBetween"
    :pagination="{
      hideOnClick: true,
    }"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @progress="onProgress"
    @slidechange="onSlideChange"
    class="my-4"
  >
    <swiper-slide v-for="(image, index) in slides" :key="index">
      <img class="h-60 w-full object-cover rounded-xl" :src="image" alt="" />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import { Autoplay } from "swiper";
import { onMounted } from "vue";

register();

const slides = [
  "https://cms1.gmgamingsystems.com/medialibraries/osiristrading.com/content/Os_website-images/team-1.jpg",
  "https://cms1.gmgamingsystems.com/medialibraries/osiristrading.com/content/Os_website-images/full-project-1.jpg",
  "https://cms1.gmgamingsystems.com/medialibraries/osiristrading.com/content/Os_website-images/team-2.jpg",
  "https://cms1.gmgamingsystems.com/medialibraries/osiristrading.com/content/Os_website-images/full-project-2.jpg",
  "https://cms1.gmgamingsystems.com/medialibraries/osiristrading.com/content/Os_website-images/team-3.jpg",
  "https://cms1.gmgamingsystems.com/medialibraries/osiristrading.com/content/Os_website-images/full-project-3.jpg",
];

onMounted(() => {
  const swiperEl = document.querySelector("swiper-container");

  const params = {
    modules: [Autoplay],
    // inject modules styles to shadow DOM
    injectStylesUrls: ["swiper/element/css/autoplay"],
    autoplay: true,
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();
});

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = (e) => {
  console.log("slide changed");
};
</script>
