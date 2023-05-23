<template>
  <div
    class="p-6 rounded-lg border border-[#00A826] border-solid text-white flex justify-between items-center hover:cursor-pointer hover:bg-white/30"
    :class="props.generic ? 'flex-col' : 'flex-col md:flex-row'"
  >
    <div>
      <div v-if="!props.generic">
        <div class="text-lg font-bold">Do you feel you meet the above?</div>
        <div class="text-xl font-black">
          Pop us a mail and we'll contact you to set up a meeting.
        </div>
      </div>
      <div v-if="props.generic">
        <div class="text-lg font-bold">Can't find what you're looking for?</div>
        <div class="text-xl font-black">
          Pop us a mail and we'll contact you to set up a meeting.
        </div>
      </div>
      <div>(Please attach your CV if possible)</div>
    </div>

    <div
      class="flex items-center flex-wrap bg-[#00A826] rounded-lg py-2 px-1 font-bold mt-2"
      :class="props.generic ? 'w-full' : ''"
    >
      <a
        class="text-white flex items-center justify-center w-full"
        :href="openEmail()"
      >
        Email us!
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  generic: boolean;
  career?: any;
}
const props = withDefaults(defineProps<IProps>(), {
  generic: false,
});

function openEmail() {
  const base = "mailto:betway.devconf@ragingriver.co.za";
  if (!!props.career)
    return `${base}?subject=${props.career.title}&body=I would like to apply for any openings available for a ${props.career.title} at ${props.career.company}`;
  else
    return `${base}?subject=General Career Enquiry&body=I would like to apply for any openings available that would be suitable for my CV`;
}
</script>

<style scoped></style>
