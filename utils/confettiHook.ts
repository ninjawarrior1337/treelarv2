import { onMounted, ref, watch } from "@nuxtjs/composition-api"
import { useLoveLive } from "./lovelive"

const confettiActive = ref(false)
const confettiColor = ref("#3399ff")

export function useConfetti() {
    const {birthdayIdol} = useLoveLive()
    watch(
        birthdayIdol,
        (i) => {
            if(i) {
                setColor(i.color)
                confettiActive.value = true
            }
        }
    )
    const setColor = (color: string) => {
        confettiColor.value = color
    }
    const showConfetti = (v: boolean) => {
        confettiActive.value = v
    }

    return {
        showConfetti,
        confettiActive,
        confettiColor,
        setColor
    }
}

declare global {
    interface Window {
        toggleConfetti: () => void
    }
}