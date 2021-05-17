<template>
    <div class="fixed hidden lg:block z-10 w-full bg-gray-900 mb-8">
        <div class="w-full h-16 grid grid-cols-12 justify-items-center">
            <div class="h-16 p-3 mr-12 col-span-3">
                <nuxt-link :to="localePath('index')">
                    <img class="h-full object-contain" src="/logo/logo2020.png">
                </nuxt-link>
            </div>
            <div class="h-full flex space-x-12 col-span-6">
                <nuxt-link
                    :to="localePath('index')"
                    class="grid place-items-center text-gray-200text-white lg:text-lg text-xl bg-gray-800 px-2"
                    v-t="'Home'"
                ></nuxt-link>
                <nuxt-link
                    :to="localePath('projects')"
                    class="grid place-items-center text-white lg:text-lg text-xl bg-gray-800 px-2"
                    v-t="'Projects'"
                ></nuxt-link>
                <a
                    target="_blank"
                    href="https://anilist.co/user/Treelar"
                    class="grid place-items-center text-white lg:text-lg text-xl bg-gray-800 px-2"
                    v-t="'Anime'"
                ></a>
            </div>
            <div class="col-span-3">
                <button
                    v-if="confettiActive"
                    class="h-full truncate grid place-items-center"
                    @click="showConfetti(false)"
                >
                    Turn Off Confetti
                </button>
            </div>
        </div>
        <div class="treelar-gradient h-1 self-start"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useConfetti } from "~/utils";

export default defineComponent({
    setup() {
        const { confettiActive, showConfetti } = useConfetti();
        return {
            confettiActive,
            showConfetti,
        };
    },
});
</script>

<style>
</style>