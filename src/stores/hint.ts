import {defineStore} from "pinia";
import {ref} from "vue";

export const useHintStore = defineStore("hint", () => {
    const hint = ref('')

    function setHint(text: string) {
        hint.value = text
    }

    function clearHint() {
        hint.value = ''
    }

    return {hint, setHint, clearHint}
})