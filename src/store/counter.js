import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const countDoubled = computed(() => {
        return count.value * 2
    })

    const increaseCounter = () => {
        count.value++
    }
    const decreaseCounter = () => {
        count.value--
    }

    return { count, countDoubled, increaseCounter, decreaseCounter }
})