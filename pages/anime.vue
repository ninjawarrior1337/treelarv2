<template>
  <div class="dark:bg-gray-800">
    <h1 class="text-center text-4xl font-bold select-none p-8">Watching</h1>
    <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-4 grid-flow-row gap-6 pb-8">
      <anime-card v-for="show of state.anime.currShows" :key="show.title" :title="show.title" :desc="show.desc" :imgurl="show.imgUrl"></anime-card>
    </div>
    <h1 class="text-center text-4xl font-bold select-none p-8">Watched</h1>
    <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-6 pb-32">
      <anime-card v-for="show of state.anime.prevShows" :key="show.title" :title="show.title" :desc="show.desc" :imgurl="show.imgUrl"></anime-card>
    </div>
  </div>
</template>

<script>
    import AnimeCard from "../components/animeCard";
    import {reactive} from "@vue/composition-api";
    export default {
        setup() {
          const state = reactive({
            anime: {
              currShows: [
                {
                  title: "Laid-Back Camp",
                  imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                  desc: "ABC...easy as 123"
                },
                {
                  title: "Laid-Back Camp",
                  imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                  desc: "ABC...easy as 123"
                },
                {
                  title: "Laid-Back Camp",
                  imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                  desc: "ABC...easy as 123"
                },
                {
                  title: "Laid-Back Camp",
                  imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                  desc: "ABC...easy as 123"
                },
                {
                  title: "Laid-Back Camp",
                  imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                  desc: "ABC...easy as 123"
                },
                {
                  title: "Laid-Back Camp",
                  imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                  desc: "ABC...easy as 123"
                },
              ],
              prevShows: [
                {
                  title: "Laid-Back Camp",
                  imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                  desc: "ABC...easy as 123"
                }
              ]
            }
          })
          return {
            state
          }
        },
        name: "anime",
        components: {AnimeCard}
    }
</script>

<style scoped>

</style>
