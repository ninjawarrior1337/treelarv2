<template>
  <transition
    enter-active-class="transform transition-all ease-in-out"
    enter-class="scale-75 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transform transition-all ease-in-out"
    leave-class="scale-100 opacity-100"
    leave-to-class="scale-75 opacity-0"
  >
    <button
      v-if="!navOpen"
      @click="navOpen = !navOpen"
      class="flex items-center fixed bottom-5 right-5 px-4 py-1.5 focus:outline-none bg-gradient-to-tr to-aqours from-muse rounded shadow text-center lg:hidden text-5xl border-2 origin-bottom-right"
    >
      <span class="font-light">=</span>
    </button>

    <div
      v-else
      @click="navOpen = false"
      class="focus:outline-none fixed lg:hidden bottom-5 right-5 grid grid-cols-3 grid-rows-3 gap-2 bg-gradient-to-tr via-treelar to-treelar from-muse p-2 rounded shadow origin-bottom-right"
    >
      <nuxt-link
        to="/"
        class="row-span-2 h-32 w-16 bg-black flex flex-col items-center justify-center"
      >
        <fa icon="home" size="2x"></fa>
        <span>Home</span>
      </nuxt-link>
      <nuxt-link
        to="/projects"
        class="row-span-2 bg-black flex flex-col items-center justify-center"
      >
        <fa icon="brain" size="2x"></fa>
        <span>Projects</span>
      </nuxt-link>
      <button class="row-span-1 bg-black text-3xl">
        <img class="w-16 p-2 h-full" src="/logo/logo2020.svg">
      </button>
      <div class="row-span-2 bg-black"></div>
      <a
        target="_blank"
        href="https://anilist.co/user/Treelar"
        class="col-span-2 bg-black grid grid-cols-2 justify-items-center items-center"
      >
        <fa icon="torii-gate" size="2x"></fa>
        <span>Anime</span>
      </a>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  setup() {
    const navOpen = ref(false);
    return {
      navOpen,
    };
  },
});
</script>

<style>
</style>
