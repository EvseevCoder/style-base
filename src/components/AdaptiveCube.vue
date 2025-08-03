<script setup>
</script>

<template>
    <div class="base">
        <h1>Это адаптивный куб</h1>

        <div class="cube"></div>
    </div>
</template>

<style scoped lang="scss">
    .base {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        flex: 1;

        h1 {
            font-size: 5rem;
            margin-bottom: 5rem;
        }
    }

    .cube {
        background-color: red;

        @include setSize(57rem, 32rem);

        @include screen-to(tablet) {
            @include setSize(57rem, 32rem);
        }
    }
</style>
