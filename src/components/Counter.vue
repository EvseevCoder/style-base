<template>
    <div :class="$style.Counter">
        <h1>Счетчик</h1>
        <h2>{{ text }}</h2>

        <div :class="$style.counter">
            <button @click="increment">+</button>
            <span>{{ Count }}</span>
            <button @click="decrement">-</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Refs
const Count = ref(0)

// Computed
const text = computed(() => {
    return `Ваш счет: ${Count.value}`
})

// Functions
function increment() {
    Count.value++
}

function decrement() {
    Count.value--
}
</script>

<style lang="scss" module>
.Counter {
    background-color: rgb(207 200 200);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 10rem;
    flex-direction: column;

    span {
        margin: 0 10rem;
    }

    button {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(163 112 112);
        color: white;
        font-size: 5rem;
    }
}

.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
</style>
