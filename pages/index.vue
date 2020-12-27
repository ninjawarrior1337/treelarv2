<template>
  <div class="flex w-screen min-h-screen justify-center items-center flex-col-reverse lg:flex-row">
    <div class="mx-16 space-y-2">
      <h1 class="text-3xl md:text-6xl mb-4 pb-4">Hi, I'm Treelar</h1>
      <h2 class="text-2xl md:text-4xl" v-html="colorText('日本語 勉強中')"></h2>
      <h2 class="text-2xl md:text-4xl" v-html="colorText('Prefers Vue over React')"></h2>
      <h2 class="text-2xl md:text-4xl" v-html="colorText('ラブライバー')"></h2>
      <h2 class="text-2xl md:text-4xl" v-html="colorText('Kotlin and Golang are the future')"></h2>
      <client-only>
        <h2 class="text-2xl md:text-4xl mt-8 truncate" v-if="birthdayIdol" :style="{color: birthdayIdol.color}">Happy Birthday {{birthdayIdol.name}}!</h2>
      </client-only>
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
  import {reactive, defineComponent} from "@vue/composition-api"
  import { useLoveLive } from "~/utils"
  const colorTable = {
    "Vue": ["#41B883", "https://vuejs.org"],
    "React": ["#00d8ff", "https://reactjs.org/"],
    "ラブライバー": ["#e4007f", "https://love-live.fandom.com/wiki/Main_Page"],
    "Kotlin": ["#F88909", "https://kotlinlang.org/"],
    "Golang": ["#00ADD8", "https://golang.org/"],
    "本": ["#ff0000", ""]
  }
  export default defineComponent({
    name: "home",
    setup() {
      const {birthdayIdol} = useLoveLive()
      const colorText = (input: String): String => {
        var finalStr = input
        for(var [key, [color, link]] of Object.entries(colorTable)) {
          if(input.includes(key)) {
            finalStr = finalStr.replace(key, `<a rel="noopener noreferrer" style="color: ${color}" href="${link}" target="_blank">${key}</a>`)
          }
        }
        return finalStr
      }
      return {
        colorText,
        birthdayIdol
      }
    },
    components: {
      Logo3d,
      Logo2d
    }
  })
</script>
