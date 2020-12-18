<template>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    render(h) {
        return (
            <div class="min-h-screen flex flex-col items-center justify-center">
                <h1 class="text-4xl text-center">This page was rendered using JSX. I didnt know I could do this with Vue...</h1>
                <h1 class="text-4xl text-center">I especially didn't know it was this easy to do using Nuxt.</h1>
            </div>
        )
    }
})
</script>

<style>

</style>