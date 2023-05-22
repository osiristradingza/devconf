<template>
  <div
    class="p-4 rounded-lg border border-[#00A826] border-solid text-white flex justify-between items-center"
    :class="props.generic ? 'flex-col' : ''"
  >
    <div v-if="!props.generic">
      <div class="text-xl font-bold">Do you feel you meet the above?</div>
      <div class="text-2xl font-black">
        Pop us a mail and we'll contact you to set up a meeting.
      </div>
    </div>
    <div v-if="props.generic">
      <div class="text-xl font-bold">Can't find what you're looking for?</div>
      <div class="text-2xl font-black">
        Pop us a mail and we'll contact you to set up a meeting.
      </div>
    </div>
    <button
      class="p-4 text-lg font-bold bg-[#00A826] rounded-lg border-none text-white"
    >
      Apply now
    </button>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  generic: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  generic: false,
});
</script>

<style scoped></style>
