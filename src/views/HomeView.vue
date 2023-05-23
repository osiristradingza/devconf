<script setup lang="ts">
import { dataJobs } from "@/assets/data/data-jobs";
import UiJobcard from "@/components/ui/ui-jobcard.vue";
import UiTimeline from "@/components/ui/ui-timeline.vue";
import { Motion, Presence } from "motion/vue";
import UiCarousel from "@/components/ui/ui-carousel.vue";
import CareerApply from "@/components/career/career-apply.vue";
</script>

<template>
  <div class="w-11/12 md:w-4/5 mx-auto">
    <div
      class="text-left text-white border border-white border-solid rounded-xl mb-4"
    >
      <div class="mx-4">
        <h1 class="text-2xl font-bold">What we do</h1>
        <p>
          We offer a complete range of e-commerce and online marketing
          solutions, providing our customers with out of the box
          through-the-line marketing strategies. As a digital marketing company
          we offer a variety of services including: e-commerce solutions; social
          media marketing; search engine optimization; support; development;
          mobile centric marketing and much more.
        </p>
        <h1 class="text-2xl font-bold mt-4">Why Work For Us</h1>
        <p>
          With a global footprint comes a multi-national and multi-cultural
          staff complement, all of whom are professionals in their field. The
          combination of an open plan work space and young, dynamic individuals
          allows for a creative and stimulating environment. We are passionate
          about ensuring a strong work-life balance that allows our staff to
          operate optimally at all times.
        </p>
        <h1 class="text-2xl font-bold mt-4">Our Culture</h1>
        <p>
          We understand the importance of finding and developing talented
          individuals to ensure the future success of Osiris. We believe that
          happy employees are productive employees.
        </p>
      </div>
    </div>
    <UiCarousel />
    <UiTimeline />
    <div
      class="text-left text-white border border-white border-solid rounded-xl mb-4 py-4 flex flex-col md:flex-row justify-center items-center"
    >
      <div class="mx-4">
        <img
          class="rounded-full h-48"
          src="https://sessionize.com/image/4464-400o400o2-3Qosyxm4qeZtTi1FK9xXwp.jpg"
          alt="Matthew Bowden"
        />
        <div class="text-2xl font-black">Matthew Bowden</div>
        <div class="font-bold">Raging River - Software Development Manager</div>
      </div>
      <div class="mx-4">
        <h1 class="text-2xl font-bold">Come see our delegate speaker</h1>
        <p>
          A deep dive into the fast paced agile-ish development culture at
          Raging River and how we're making waves in the sport's betting
          industry.
        </p>
        <p>We'll float by the following :</p>
        <ul>
          <li>How the little fish proof of concept became a big fish.</li>
          <li>Game day numbers and monster weekend waves.</li>
          <li>How we've dealt with rapids and bottlenecks.</li>
          <li>The near-drowning mistakes we've made.</li>
          <li>Lessons learned in the river.</li>
          <li>How we all come together as a school.</li>
        </ul>
      </div>
    </div>
    <h1 class="text-2xl font-bold text-white">Some careers with us:</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Presence
        v-for="(job, index) in dataJobs"
        :key="job.id"
        exit-before-enter
      >
        <Motion
          :key="index"
          :initial="{ opacity: 0, scale: 0 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 1, delay: 0.3 * index }"
        >
          <UiJobcard :job="job" />
        </Motion>
      </Presence>
      <CareerApply :generic="true" />
    </div>
  </div>
</template>
