<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
interface IJob {
  company: string;
  department: string;
  title: string;
  description: string;
}
interface IProps {
  job: IJob;
}

const props = defineProps<IProps>();

const logo = () =>
  props.job.company === "Osiris Trading"
    ? "/src/assets/osiris.png"
    : "/src/assets/ragingriver.webp";

const navigateToJob = (job: any) => {
  const { key } = job;
  router.push(`/careers/${key}`);
};
</script>
<template>
  <div
    class="text-white border hover:cursor-pointer hover:bg-white/30 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden border-white border-solid"
    @click="navigateToJob(props.job)"
  >
    <div class="h-full">
      <div class="p-6">
        <h2
          class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
        >
          <img :src="logo()" alt="" class="h-12" />
        </h2>
        <h1 class="title-font text-lg font-black mb-3 line-clamp-1">
          {{ props.job.title }}
        </h1>
        <p class="leading-relaxed mb-3 line-clamp-3">
          {{ props.job.description }}
        </p>
        <div
          class="flex items-center flex-wrap bg-[#00A826] rounded-lg py-2 px-1 font-bold"
        >
          <div class="text-white flex items-center justify-center w-full">
            Learn More
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
