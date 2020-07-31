<template>
    <canvas class="fixed z-20 pointer-events-none" ref="canvas">
    </canvas>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"
import {Confetti as Confetti_T} from "../assets/confetti"
if(process.browser) {
    var Confetti = require("../assets/confetti").Confetti as typeof Confetti_T
}

export default defineComponent({
    setup() {
        const confettiInstance = ref({} as Confetti_T)
        return {
            confettiInstance
        }
    },
    props: {
        "color": {
            type: Number,
            default: 0x3399ff
        }
    },
    watch: {
        color(newColor: number) {
            this.confettiInstance.confettiColor = newColor
        }
    },
    mounted() {
        const canv = this.$refs["canvas"] as HTMLCanvasElement
        this.confettiInstance = new Confetti({
            el: canv,
            limit: 100,
            color: this.$props.color
        })
        this.confettiInstance.start()

        window.onresize = () => {
            this.confettiInstance.restart()
        }
    },
    destroyed() {
        this.confettiInstance.stop()
    }
})
</script>