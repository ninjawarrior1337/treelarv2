<template>
  <div class="dark:bg-gray-800 mt-6">
    <h1 class="text-center text-4xl font-bold select-none p-8" v-t="'Watching'"></h1>
    <div class="container mx-auto flex flex-wrap items-center justify-center pb-8">
      <anime-card v-for="show of data.currShows" :key="show.title" :title="show.title" :desc="show.desc" :imgurl="show.imgUrl"></anime-card>
    </div>
    <h1 class="text-center text-4xl font-bold select-none p-8" v-t="'Watched'"></h1>
    <div class="container mx-auto flex flex-wrap items-center justify-center pb-32">
      <anime-card v-for="show of data.prevShows" :key="show.title" :title="show.title" :desc="show.desc" :imgurl="show.imgUrl"></anime-card>
    </div>
  </div>
</template>

<script lang="ts">
  import AnimeCard from "../components/animeCard.vue";
  import AniData from "../assets/anime.yaml"
  import {defineComponent, ref} from "@vue/composition-api";
  export default defineComponent({
      setup() {
        const data = AniData
        return {
          data
        }
      },
      name: "anime",
      components: {AnimeCard}
  })
</script>

<i18n>
{
  "en": {
    "Watching": "Watching",
    "Watched": "Watched"
  },
  "ja": {
    "Watching": "見てるアニメ",
    "Watched": "見たアニメ"
  }
}
</i18n>

<style scoped>
.grid {
  justify-items: center;
  align-items: center;
}
</style>
