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

      <bottom-nav></bottom-nav>

      <div class="treelar-gradient h-1"></div>

      <treelar-footer :eggActive="eggActive"></treelar-footer>
      
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
import bottomNav from "../components/bottomNav.vue";
import treelarFooter from "../components/footer.vue"
import { useConfetti, useEasterEgg, useLoveLive } from "../utils";

export default defineComponent({
  setup() {
    let topBtn = ref() as Ref<HTMLButtonElement>;
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
    watch(
      birthdayIdol,
      (v) => {
        if (v != null) {
          showConfetti(true);
          confettiColor.value = parseInt(
            v.color.substring(1),
            16
          );
        }
      }
    )
    return {
      topBtn,
      scrollToTop,
      eggActive,
      confettiActive,
      confettiColor,
      showConfetti,
    };
  },
  components: {
    egg,
    confetti,
    bottomNav,
    treelarFooter
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
@layer utilities {
  .treelar-gradient {
    @apply w-screen bg-gradient-to-r from-muse via-treelar to-treelar;
  }
}
</style>
