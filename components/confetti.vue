<template>
    <canvas class="fixed z-20 pointer-events-none" ref="canvas">
    </canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch, onUnmounted, Ref } from "@vue/composition-api"
import {Confetti as Confetti_T} from "../utils/confetti"
if(process.browser) {
    var Confetti = require("../utils/confetti").Confetti as typeof Confetti_T
}

export default defineComponent({
    setup(props) {
        const confettiInstance = ref({} as Confetti_T)
        const canvas = ref() as Ref<HTMLCanvasElement>
        watch(
            () => props.color,
            (c) => {
                confettiInstance.value.confettiColor = c
            }
        )
        const resizeCallback = () => {
            confettiInstance.value.restart()
        }
        onMounted(() => {
            confettiInstance.value = new Confetti({
                el: canvas.value,
                limit: 100,
                color: props.color
            })
            window.addEventListener("resize", resizeCallback)
            confettiInstance.value.start()
        })
        onUnmounted(() => {
            window.removeEventListener("resize", resizeCallback)
            confettiInstance.value.stop()
        })
        return {
            confettiInstance,
            canvas
        }
    },
    props: {
        "color": {
            type: Number,
            default: 0x3399ff
        }
    }
})
</script>