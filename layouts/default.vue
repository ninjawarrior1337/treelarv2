<template>
  <div>
    <confetti v-if="confettiActive" :color="confettiColor"></confetti>
    <div class="overflow-x-hidden text-white bg-gray-900">

    <div class="fixed z-10 w-full flex flex-col items-center bg-gray-900 mb-8">
      <div class="w-full flex p-4">
        <div class="w-full flex-grow">
          <nuxt-link :to="localePath('index')" class="text-white lg:text-lg text-xl mr-4" v-t="'Home'"></nuxt-link>
          <nuxt-link :to="localePath('projects')" class="text-white lg:text-lg text-xl mr-4" v-t="'Projects'"></nuxt-link>
          <nuxt-link :to="localePath('anime')" class="text-white lg:text-lg text-xl mr-4" v-t="'Anime'"></nuxt-link>
        </div>
        <div>
          <button v-if="confettiActive" class="truncate" @click="showConfetti(false)">Turn Off Confetti</button>
        </div>
      </div>
      <div class="treelar-gradient h-1 self-start"></div>
    </div>

    <div class="lg:pt-8 pt-12">
      <nuxt v-if="!eggActive"></nuxt>
      <egg v-else></egg>
    </div>
    
    <div class="treelar-gradient h-2"></div>
    
    <footer class="py-4 text-center w-full text-xl">
      <div>
        Made with
        <fa :icon="['fab', 'vuejs']" color="#41B883"></fa>
        and
        <fa icon="egg" color="#e4007f" v-if="eggActive"></fa>
        <fa icon="torii-gate" color="#e4007f" v-else-if="getRouteBaseName($route) && getRouteBaseName($route).includes('anime')" v-cloak></fa>
        <fa icon="brain" color="#e4007f" v-else-if="getRouteBaseName($route) && getRouteBaseName($route).includes('projects')" v-cloak></fa>
        <fa icon="heart" color="#e4007f" v-else v-cloak></fa>
        by
        <span style="color: #3399ff">Treelar</span>
      </div>
      <div class="mt-2">
        <a class="mx-2" href="https://twitter.com/TYNROH" target="_blank" rel="noopener" title="Twitter"><fa :icon="['fab', 'twitter']"></fa></a>
        <a class="mx-2" href="https://github.com/ninjawarrior1337" target="_blank" rel="noopener" title="Github"><fa :icon="['fab', 'github']"></fa></a>
        <!-- <fa class="mx-2" :icon="['fab', 'discord']"></fa> -->
      </div>
    </footer>
    <button ref="topBtn" @click="scrollToTop" v-t="'Back to Top'" class="text-black bg-blue-500 hover:bg-blue-600 transform translate-x-64 transition-all duration-200 ease-in-out p-4 m-8 fixed bottom-0 right-0 rounded-full outline-none">
        
    </button>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, Ref, ref, watch, watchEffect } from "@vue/composition-api";
import egg from "../components/egg.vue"
import confetti from "../components/confetti.vue"
import {useConfetti, useEasterEgg, useLoveLive} from "../utils"

export default defineComponent({
  setup() {
    let topBtn = ref() as Ref<HTMLButtonElement>
    let scrollButtonHandler = () => {
      if(window.scrollY > 500) {
        topBtn.value.classList.add("translate-x-0")
        topBtn.value.classList.remove("translate-x-64")
      } else {
        topBtn.value.classList.add("translate-x-64")
        topBtn.value.classList.remove("translate-x-0")
      }
    }
    let scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: "smooth"
      })
    }
    onMounted(() => {
      window.addEventListener("scroll", scrollButtonHandler)
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollButtonHandler)
    })
    let {eggActive} = useEasterEgg()
    let {showConfetti, confettiActive, confettiColor, setColor} = useConfetti()
    let {birthdayIdol} = useLoveLive()
    onMounted(() => {
      if(birthdayIdol.value != null) {
          showConfetti(true)
          confettiColor.value = parseInt(birthdayIdol.value.color.substring(1), 16)
      }
    })
    return {
      topBtn,
      scrollToTop,
      eggActive,
      confettiActive,
      confettiColor,
      showConfetti,
    }
  },
  components: {
    egg,
    confetti
  },
})
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
.treelar-gradient {
  background: linear-gradient(55deg, #e4007f, #3399ff 40%);
  @apply w-screen;
}
</style>
