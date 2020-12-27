<template>
  <div>
    <confetti v-if="confettiActive" :color="confettiColor"></confetti>
    <div class="overflow-x-hidden text-white bg-gray-900">
      <div
        class="fixed hidden lg:block z-10 w-full flex-col items-center bg-gray-900 mb-8"
      >
        <div class="w-full flex p-4">
          <div class="w-full flex-grow">
            <nuxt-link
              :to="localePath('index')"
              class="text-white lg:text-lg text-xl mr-4"
              v-t="'Home'"
            ></nuxt-link>
            <nuxt-link
              :to="localePath('projects')"
              class="text-white lg:text-lg text-xl mr-4"
              v-t="'Projects'"
            ></nuxt-link>
            <nuxt-link
              :to="localePath('anime')"
              class="text-white lg:text-lg text-xl mr-4"
              v-t="'Anime'"
            ></nuxt-link>
          </div>
          <div>
            <button
              v-if="confettiActive"
              class="truncate"
              @click="showConfetti(false)"
            >
              Turn Off Confetti
            </button>
          </div>
        </div>
        <div class="treelar-gradient h-1 self-start"></div>
      </div>

      <div class="lg:pt-8">
        <nuxt v-if="!eggActive"></nuxt>
        <egg v-else></egg>
      </div>

      <transition
        enter-active-class="transform transition-all ease-in-out origin-bottom-right"
        enter-class="scale-75 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transform transition-all ease-in-out origin-bottom-right"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-75 opacity-0"
      >
        <button
          v-if="!navOpen"
          @click="navOpen = !navOpen"
          class="flex items-center fixed bottom-5 right-5 px-4 py-1.5 focus:outline-none bg-gradient-to-tr to-aqours from-muse rounded shadow text-center lg:hidden text-5xl border-2"
        >
          <span class="font-light">{{ navOpen ? "X" : "=" }}</span>
        </button>

        <div v-else @click="navOpen=false" class="focus:outline-none fixed lg:hidden bottom-5 right-5 grid grid-cols-3 grid-rows-3 gap-2 bg-gradient-to-tr via-treelar to-treelar from-muse p-2 rounded shadow">
          <nuxt-link to="/" class="row-span-2 h-32 w-16 bg-black flex flex-col items-center justify-center">
            <fa icon="home" size="2x"></fa>
            <span>Home</span>
          </nuxt-link>
          <nuxt-link to="/projects" class="row-span-2 h-32 w-16 bg-black flex flex-col items-center justify-center">
            <fa icon="brain" size="2x"></fa>
            <span>Projects</span>
          </nuxt-link>
          <button class="row-span-1 bg-black text-3xl">X</button>
          <nuxt-link to="/anime" class="row-span-2 h-32 w-16 bg-black flex flex-col items-center justify-center">
            <fa icon="torii-gate" size="2x"></fa>
            <span>Anime</span>
          </nuxt-link>
          <div class="col-span-2 bg-black"></div>
        </div>
      </transition>

      <div class="treelar-gradient h-1"></div>

      <footer class="py-4 text-center w-full text-xl">
        <div>
          Made with
          <fa :icon="['fab', 'vuejs']" color="#41B883"></fa>
          and
          <fa icon="egg" class="text-muse" v-if="eggActive"></fa>
          <fa
            icon="torii-gate"
            class="text-muse"
            v-else-if="
              getRouteBaseName($route) &&
              getRouteBaseName($route).includes('anime')
            "
            v-cloak
          ></fa>
          <fa
            icon="brain"
            class="text-muse"
            v-else-if="
              getRouteBaseName($route) &&
              getRouteBaseName($route).includes('projects')
            "
            v-cloak
          ></fa>
          <fa icon="heart" class="text-muse" v-else v-cloak></fa>
          by
          <span class="text-treelar">Treelar</span>
        </div>
        <div class="mt-2">
          <a
            class="mx-2"
            href="https://twitter.com/TYNROH"
            target="_blank"
            rel="noopener"
            title="Twitter"
            ><fa :icon="['fab', 'twitter']"></fa
          ></a>
          <a
            class="mx-2"
            href="https://github.com/ninjawarrior1337"
            target="_blank"
            rel="noopener"
            title="Github"
            ><fa :icon="['fab', 'github']"></fa
          ></a>
          <!-- <fa class="mx-2" :icon="['fab', 'discord']"></fa> -->
        </div>
      </footer>
      <button
        ref="topBtn"
        @click="scrollToTop"
        v-t="'Back to Top'"
        class="hidden lg:block lg:fixed bg-blue-500 hover:bg-blue-600 transform translate-x-64 transition-all duration-200 ease-in-out p-4 m-8 bottom-0 right-0 rounded-full"
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  Ref,
  ref,
  watch,
  watchEffect,
} from "@vue/composition-api";
import egg from "../components/egg.vue";
import confetti from "../components/confetti.vue";
import { useConfetti, useEasterEgg, useLoveLive } from "../utils";

export default defineComponent({
  setup() {
    let topBtn = ref() as Ref<HTMLButtonElement>;
    let navOpen = ref(false);
    let scrollButtonHandler = () => {
      if (window.scrollY > 500) {
        topBtn.value.classList.add("translate-x-0");
        topBtn.value.classList.remove("translate-x-64");
      } else {
        topBtn.value.classList.add("translate-x-64");
        topBtn.value.classList.remove("translate-x-0");
      }
    };
    let scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollButtonHandler);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollButtonHandler);
    });
    let { eggActive } = useEasterEgg();
    let {
      showConfetti,
      confettiActive,
      confettiColor,
      setColor,
    } = useConfetti();
    let { birthdayIdol } = useLoveLive();
    onMounted(() => {
      if (birthdayIdol.value != null) {
        showConfetti(true);
        confettiColor.value = parseInt(
          birthdayIdol.value.color.substring(1),
          16
        );
      }
    });
    return {
      topBtn,
      scrollToTop,
      eggActive,
      confettiActive,
      confettiColor,
      showConfetti,
      navOpen,
    };
  },
  components: {
    egg,
    confetti,
  },
});
</script>

<i18n>
{
  "en": {
    "Home": "Home",
    "Anime": "Anime",
    "Projects": "Projects",
    "Back to Top": "Back to Top"
  },
  "ja": {
    "Home": "ホーム",
    "Anime": "アニメ",
    "Projects": "プロジェクト",
    "Back to Top": "トップに飛んで"
  }
}
</i18n>

<style>
@layer components {
  .treelar-gradient {
    @apply w-screen bg-gradient-to-r from-muse via-treelar to-treelar;
  }
}
</style>
