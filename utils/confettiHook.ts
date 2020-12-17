import { ref } from "@vue/composition-api"

export function useConfetti() {
    let confettiActive = ref(false)
    let confettiColor = ref(0x3399ff)
    let setColor = (color: number) => {
        confettiColor.value = color
    }
    let showConfetti = (v: boolean) => {
        confettiActive.value = v
    }

    return {
        showConfetti,
        confettiActive,
        confettiColor,
        setColor
    }
}