<template>
  <div class="container mx-2">
    <CareerTitle :key="career.id"
      >{{ career.title }}
      <template #company
        >{{ career.company }} > {{ career.department }}</template
      >
      <template #logo> <img :src="logo" alt="" class="h-12" /> </template>
    </CareerTitle>
    <component :is="career.component" :key="career.id" />

    <div class="w-full font-black text-white text-2xl my-4">Apply now:</div>
    <CareerApply />
    <div class="w-full font-black text-white text-2xl my-4">More Careers</div>
    <CareerCarousel />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { dataJobs } from "@/assets/data/data-jobs";
import CareerCarousel from "@/components/career/career-carousel.vue";
import CareerTitle from "@/components/career/career-title.vue";
import { computed } from "vue";
import CareerApply from "@/components/career/career-apply.vue";
const route = useRoute();
const career = computed(() => {
  return dataJobs.find(({ key }) => key === route.params.id);
});
const logo = computed(() =>
  career.company === "Osiris Trading"
    ? "/src/assets/osiris.png"
    : "/src/assets/ragingriver.webp"
);
</script>

<style scoped></style>
