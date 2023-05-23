<template>
  <div
    class="flex items-center justify-between sticky top-0 bg-black p-3 rounded"
  >
    <div class="flex items-center">
      <div
        class="bg-white mr-4 h-10 w-10 rounded-full flex justify-center items-center"
        @click="home()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
      <div>
        <div class="text-2xl font-black text-white line-clamp-1"><slot /></div>
        <div class="font-bold text-white"><slot name="company" /></div>
      </div>
    </div>

    <div><slot name="logo" /></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const home = () => router.push("/");
</script>

<style scoped></style>
