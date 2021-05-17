import { onMounted, onUnmounted, reactive, ref } from "@nuxtjs/composition-api";

const eggCheckList = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]

export function useEasterEgg() {
    let eggList = ref([] as String[])
    let eggActive = ref(false)
    let handleKeyDown = (e: KeyboardEvent) => {
        eggList.value.push(e.key)
        if(eggList.value.length >= eggCheckList.length) {
            if (JSON.stringify(eggList.value) == JSON.stringify(eggCheckList)) {
                eggActive.value = !eggActive.value
            }
            eggList.value.splice(0, 1)
        }
    }
    onMounted(() => {
        document.addEventListener("keydown", handleKeyDown)
    })

    onUnmounted(() => {
        document.removeEventListener("keydown", handleKeyDown)
    })

    return {
        eggActive
    }
}