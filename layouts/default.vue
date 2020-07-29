<template>
  <div class="overflow-x-hidden text-white bg-gray-900">
    <nav class="fixed z-10 w-full flex p-8 lg:p-5 bg-gray-900 border-b-4 border-blue-500 mb-8">
      <div class="w-full flex-grow">
        <nuxt-link :to="localePath('index')" class="text-white lg:text-lg text-3xl mr-4" v-t="'Home'"></nuxt-link>
        <nuxt-link :to="localePath('projects')" class="text-white lg:text-lg text-3xl mr-4" v-t="'Projects'"></nuxt-link>
        <nuxt-link :to="localePath('anime')" class="text-white lg:text-lg text-3xl mr-4" v-t="'Anime'"></nuxt-link>
      </div>
    </nav>
    <div class="lg:pt-8 pt-24">
      <nuxt v-if="!state.eggActive"></nuxt>
      <egg v-else></egg>
    </div>
    <footer class="p-4 text-center w-full border-t-4 border-blue-500 text-xl">
      <div>
        Made with
        <fa :icon="['fab', 'vuejs']" color="#41B883"></fa>
        and
        <fa icon="egg" color="#e4007f" v-if="state.eggActive"></fa>
        <fa icon="torii-gate" color="#e4007f" v-else-if="getRouteBaseName($route) && getRouteBaseName($route).includes('anime')" v-cloak></fa>
        <fa icon="brain" color="#e4007f" v-else-if="getRouteBaseName($route) && getRouteBaseName($route).includes('projects')" v-cloak></fa>
        <fa icon="heart" color="#e4007f" v-else v-cloak></fa>
        by
        <span style="color: #3399ff">Treelar</span>
      </div>
      <div class="mt-2">
        <a class="mx-2" href="https://twitter.com/TYNROH" target="_blank" rel="noopener"><fa :icon="['fab', 'twitter']"></fa></a>
        <a class="mx-2" href="https://github.com/ninjawarrior1337" target="_blank" rel="noopener"><fa :icon="['fab', 'github']"></fa></a>
        <fa class="mx-2" :icon="['fab', 'discord']"></fa>
      </div>
    </footer>
    <button ref="topBtn" @click="scrollToTop" v-t="'Back to Top'" class="bg-blue-500 hover:bg-blue-400 transform translate-x-64 transition-all duration-200 ease-in-out p-4 m-8 fixed bottom-0 right-0 rounded-full outline-none">
        
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import egg from "../components/egg.vue"

let eggCheckList = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
let eggList: String[] = []

export default defineComponent({
  setup() {
    const state = reactive({
      eggActive: false
    })
    return {
      state
    }
  },
  components: {
    egg
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      })
    }
  },
  mounted() {
    //Setup Back to top button
    let topBtn = this.$refs["topBtn"] as HTMLButtonElement
    window.onscroll = () => {
      if(window.scrollY > 500) {
        topBtn.classList.add("translate-x-0")
        topBtn.classList.remove("translate-x-64")
      } else {
        topBtn.classList.add("translate-x-64")
        topBtn.classList.remove("translate-x-0")
      }
    }
    //Setup easter egg
    document.onkeydown = (e: KeyboardEvent) => {
      eggList.push(e.key)
      if(eggList.length >= eggCheckList.length) {
        if (JSON.stringify(eggList) == JSON.stringify(eggCheckList)) {
          this.state.eggActive = !this.state.eggActive
        }
        eggList.splice(0, 1)
      }
    }
  },
  destroyed() {
    window.onscroll = () => {}
    document.onkeydown = (e) => {}
  }
})
</script>

<i18n>
{
  "en": {
    "Home": "Home",
    "Anime": "Anime",
    "Back to Top": "Back to Top"
  },
  "ja": {
    "Home": "ホーム",
    "Anime": "アニメ",
    "Back to Top": "トップに"
  }
}
</i18n>

<style>

</style>
