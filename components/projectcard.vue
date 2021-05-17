<template>
    <div class="w-full p-8 my-16 shadow-xl bg-gray-800 rounded-sm">
        <div class="flex flex-row mb-4">
            <div>
                <h1 class="text-4xl underline mb-4">{{$props.title}}</h1>
                <div
                    class="text-2xl"
                    v-html="descriptionMd"
                ></div>
            </div>
            <div class="flex-grow"></div>
            <img
                :src="$props.img"
                class="w-32 mx-2 h-full object-contain"
                :alt="$props.title+' logo'"
                v-if="$props.img"
            >
        </div>
        <div
            class="flex items-center justify-end h-full mt-4 border-t-4 border-blue-500"
            v-if="links"
        >
            <a
                class="text-2xl font-bold mx-2 mt-4 underline"
                v-for="link of links"
                :key="link"
                :href="link.split('=')[1]"
                rel="noopener"
                target="_blank"
            >{{link.split("=")[0]}}</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "@nuxtjs/composition-api";
import * as showdown from "showdown";

var converter = new showdown.Converter();

export default defineComponent({
    name: "project-card",
    props: {
        title: String,
        description: String,
        links: {
            type: Array as PropType<String[]>,
        },
        img: String,
    },
    setup(props) {
        const descriptionMd = computed<string>(() => {
            return converter.makeHtml(props.description!);
        });
        return {
            descriptionMd,
        };
    },
});
</script>

<style>
</style>