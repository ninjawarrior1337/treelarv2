<template>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from "@nuxtjs/composition-api"
import {useConfetti} from "../utils"
import confetti from "canvas-confetti"
export default defineComponent({
    setup(props) {
        const {confettiActive, confettiColor} = useConfetti()
        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        }
        const animFrameID = ref(0)

        const animate = () => {
            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: 500,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.5
                },
                colors: [confettiColor.value],
                shapes: ["square"],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
            })
            animFrameID.value = requestAnimationFrame(animate)
        }

        watch(
            confettiActive,
            (cV, pV) => {
                if(!cV) {
                    cancelAnimationFrame(animFrameID.value)
                    confetti.reset()
                } else {
                    animFrameID.value = requestAnimationFrame(animate)
                }
            }, {immediate: true}
        )

        onUnmounted(() => {
            cancelAnimationFrame(animFrameID.value)
        })
        return {
            confettiActive,
            confettiColor
        }
    }
})
</script>