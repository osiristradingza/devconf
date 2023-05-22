<template>
  <div>
    <div
      class="text-xl bg-[#00A826] px-2 py-4 text-white font-bold rounded mt-6"
    >
      {{ props.title || $attrs.title }}
    </div>
  </div>
  <div class="text-white">
    <slot />
  </div>
</template>

<script setup>
const props = withDefaults(defineProps(), {
  title: "",
});
</script>

<style scoped></style>
