<script setup lang="ts">
import { Motion, Presence } from "motion/vue";
import { computed, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const logos = ref();
const router = useRouter();
const calculatedTop = ref();
const calculateTop = () => {
  calculatedTop.value = logos.value.clientHeight;
};
const home = () => router.push("/");
onMounted(() => window.addEventListener("resize", () => calculateTop()));
</script>
<template>
  <Motion
    :initial="{
      position: 'absolute',
      top: '50%',
      display: 'flex',
      justifyContent: 'center',
      margin: '0 auto',
    }"
    :animate="{
      position: 'absolute',
      top: 0,
    }"
    :transition="{ duration: 1, delay: 1 }"
    class="box w-full z-[100] my-5"
    @motioncomplete="calculateTop"
  >
    <div class="mx-auto m-5 container" ref="logos" id="logos" @click="home()">
      <div class="flex justify-between items-center">
        <div class="w-full mx-5">
          <img
            class="object-contain w-full h-10"
            src="../../assets/devconf.png"
            alt=""
          />
        </div>
        <div class="w-full mx-5">
          <img
            class="object-contain w-full h-10"
            src="../../assets/betway.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </Motion>
  <Motion
    :initial="{
      opacity: 1,
      position: 'absolute',
      scale: 1,
    }"
    :animate="{
      opacity: 0,
      scale: 0,
      position: 'absolute',
      transition: { duration: 0.5, delay: 1.5 },
    }"
    class="h-screen w-screen z-[99]"
    ><div class="w-screen h-screen absolute top-0 left-0 bg-black z-[99]"
  /></Motion>
  <div
    class="mx-auto absolute w-full"
    :style="{ top: `${calculatedTop * 2}px` }"
  >
    <main class="container mx-auto pb-10">
      <slot />
    </main>
    <div class="bg-black p-4 text-white">
      <div class="container mx-auto">
        <p>
          Raging River Trading (Pty) Ltd (2011/134505/07) licenced to promote
          Betway South Africa, is licensed and regulated by the Western Cape
          Gambling and Racing Board. Bookmaker License Number:10181496-009 first
          Issued on 1 December 2016 . No persons under the age of 18 years are
          permitted to gamble. Winners know when to stop. National Responsible
          Gambling Programme:0800 006 008 or WHATSAPP HELP 076 675 0710.
          Warning:Gambling involves risk. Gambling on this website, you run the
          risk that you may lose.
        </p>
        <p>All rights reserved 2023</p>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center p-4">
      <a class="text-white" href="https://www.betway.co.za/"
        >www.betway.co.za</a
      >
      <a class="text-white" href="https://www.betway.co.tz/?nogeoredirect=1"
        >www.betway.co.tz</a
      >
      <a class="text-white" href="https://www.betway.co.mz/?nogeoredirect=1"
        >www.betway.co.mz</a
      >
      <a class="text-white" href="https://www.betway.com.gh/?nogeoredirect=1"
        >www.betway.com.gh</a
      >
      <a class="text-white" href="https://www.betway.com.ng/?nogeoredirect=1"
        >www.betway.com.ng</a
      >
      <a class="text-white" href="https://www.betway.co.zm/?nogeoredirect=1"
        >www.betway.co.zm</a
      >
    </div>
  </div>
</template>
