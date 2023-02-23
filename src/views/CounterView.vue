<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../store/counter'

const store = useCounterStore()
const {count, countDoubled} = storeToRefs(store)
const { increaseCounter, decreaseCounter } = store
</script>

<template>
    <div>
        <h1> {{count}} </h1>
        <div class="btns">
            <button @click="increaseCounter">+</button>
            <button @click="decreaseCounter">-</button>
        </div> 

        <hr>
        <div class="doubled">
            <h2>Number Doubled:</h2>
            <p> {{ countDoubled }} </p>
        </div>
        <hr>
        <input type="number" v-model="count">
    </div>
</template>


<style lang="scss" scoped>
h1, .doubled{
    text-align: center;
    margin: 10px;
}
.btns button{
    padding: 7px;
    margin-right: 5px;
}

.btns{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
</style>