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
    <swiper-slide v-for="(job, index) in dataJobs" :key="job.id">
      <UiJobcard :job="job" />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import { Autoplay } from "swiper";
import { onMounted } from "vue";
import UiJobcard from "@/components/ui/ui-jobcard.vue";
import { dataJobs } from "@/assets/data/data-jobs";

register();

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
