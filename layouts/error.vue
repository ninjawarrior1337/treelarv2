<template>
  <div class=" container mx-auto h-screen flex items-center justify-center">
      <div class="text-6xl text-center" v-if="error.statusCode == 404">
          {{error.statusCode}}
            Not Found
            <p>If you find this, congrats! You get an exclusive download of Reverse Game 2</p>
            <button class="px-4 py-2 bg-blue-500 rounded-lg text-4xl border-b-4 border-blue-700" @click="openRick">Download</button>
      </div>
      <div class="text-6xl text-center" v-else>
          {{error.statusCode}}
          <p>{{error.message}}</p>
      </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api"
export default defineComponent({
    setup() {
        const openRick = () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
        return {
            openRick
        }
    },
    props: [
        "error"
    ],
})
</script>

<style>

</style>
