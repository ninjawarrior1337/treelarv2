<template>
  <div class="flex w-screen h-screen justify-center items-center flex-col-reverse lg:flex-row">
    <div class="mx-16">
      <h1 class="text-6xl mb-4">Hi, I'm Treelar</h1>
      <h2 class="text-4xl">日本語勉強中</h2>
      <h2 class="text-4xl" v-html="colorText('Likes Vue over React')"></h2>
      <h2 class="text-4xl" v-html="colorText('Trapped in Idol Hell')"></h2>
      <h2 class="text-4xl" v-html="colorText('Kotlin and Go are the future')"></h2>
    </div>
    <div class="mx-16">
      <Logo3d width="450px" height="450px"></Logo3d>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import Logo3d from "@/components/logo3d.vue"
  import {reactive, defineComponent} from "@vue/composition-api";
  const colorTable = {
    "Vue": ["#41B883", "https://vuejs.org"],
    "React": ["#00d8ff", "https://reactjs.org/"],
    "Idol Hell": ["#e4007f", "https://love-live.fandom.com/wiki/Main_Page"],
    "Kotlin": ["#F88909", "https://kotlinlang.org/"],
    "Go": ["#00ADD8", "https://golang.org/"]
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
            finalStr = finalStr.replace(key, `<a style="color: ${color}" href="${link}" target="_blank">${key}</a>`)
          }
        }
        return finalStr
      }
    },
    components: {
      Logo3d
    }
  })
</script>
