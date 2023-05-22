<script setup lang="ts">
import { RouterView } from "vue-router";
import BaseLayout from "./components/layouts/base.vue";
</script>

<template>
  <BaseLayout>
    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and  to `fade` -->
      <transition :name="'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </BaseLayout>
</template>
