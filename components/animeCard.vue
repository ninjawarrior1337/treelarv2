<template>
  <div class="card max-w-sm w-full md:w-1/3 lg:w-1/5 mx-8 mb-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-200">
    <img class="w-full rounded-t-lg" :src="`https://images.weserv.nl/?url=${$props.imgurl}&w=300`" :alt="$props.title + ' promo art'">
    <div class="px-6 py-4 bg-gray-800 text-white rounded-b-lg mt-auto">
      <h3 class="font-bold text-xl mb-2">{{$props.title}}</h3>
      <p class="text-gray-400 text-base" v-html="$props.desc"></p>
    </div>
  </div>
</template>

<script lang="ts">
  import {reactive, defineComponent} from "@vue/composition-api";
  export default defineComponent({
    name: "anime-card",
    props: [
      "title",
      "desc",
      "imgurl"
    ],
  })
</script>

<style scoped>

</style>
