<template>
    <div class="mx-auto max-w-sm rounded-lg shadow-md hover:shadow-xl text-center -translate-y-12 transition-all duration-200">
      <img class="w-full rounded-t-lg" :src="$props.imgurl">
      <div class="px-6 py-4">
        <h3 class="font-bold text-xl mb-2">{{$props.title}}</h3>
        <p class="text-gray-700 text-base">{{$props.desc}}</p>
      </div>
    </div>
</template>

<script>
  import {reactive} from "@vue/composition-api";
  export default {
    name: "anime-card",
    props: [
      "title",
      "desc",
      "imgurl"
    ],
  }
</script>

<style scoped>

</style>
