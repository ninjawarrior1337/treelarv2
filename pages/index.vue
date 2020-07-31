<template>
  <div class="flex w-screen min-h-screen justify-center items-center flex-col-reverse lg:flex-row">
    <div class="mx-16">
      <h1 class="text-3xl md:text-6xl mb-4">Hi, I'm Treelar</h1>
      <h2 class="text-2xl md:text-4xl">日本語勉強中</h2>
      <h2 class="text-2xl md:text-4xl" v-html="colorText('Prefers Vue over React')"></h2>
      <h2 class="text-2xl md:text-4xl" v-html="colorText('Trapped in Idol Hell')"></h2>
      <h2 class="text-2xl md:text-4xl" v-html="colorText('Kotlin and Golang are the future')"></h2>
    </div>
    <div class="mx-16 hidden lg:block">
      <!-- In prod I should stop this from loading on mobile devices -->
      <keep-alive>
        <Logo3d width="450px" height="450px"></Logo3d>
      </keep-alive>
    </div>
    <div class="my-16 block lg:hidden">
      <Logo2d width="275px" height="275px"></Logo2d>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import Logo3d from "@/components/logo3d.vue"
  import Logo2d from "@/components/logo2d.vue"
  import {reactive, defineComponent} from "@vue/composition-api";
  const colorTable = {
    "Vue": ["#41B883", "https://vuejs.org"],
    "React": ["#00d8ff", "https://reactjs.org/"],
    "Idol Hell": ["#e4007f", "https://love-live.fandom.com/wiki/Main_Page"],
    "Kotlin": ["#F88909", "https://kotlinlang.org/"],
    "Golang": ["#00ADD8", "https://golang.org/"]
  }
  export default defineComponent({
    setup() {
      const state = reactive({
        bruh: "fortnite"
      })
      return {
        state
      }
    },
    methods: {
      colorText(input: String): String {
        var finalStr = input
        for(var [key, [color, link]] of Object.entries(colorTable)) {
          if(input.includes(key)) {
            finalStr = finalStr.replace(key, `<a rel="noopener noreferrer" style="color: ${color}" href="${link}" target="_blank">${key}</a>`)
          }
        }
        return finalStr
      }
    },
    components: {
      Logo3d,
      Logo2d
    }
  })
</script>
