<template>
    <div class="content">
        <Category title="">
            <template #header>
                <h2>Header</h2>
            </template>
            <template v-slot:body>
                <h2>Header</h2>
            </template>
        </Category>
        <Category title="">

        </Category>
        <Category title="">

        </Category>
        <!-- child has the data, parent control the UI-->
        <Game>
            <template v-slot:slotName="params">
                <div v-for="game in params.data" :key="game.name">
                    <h2>{{ game.name }}</h2>
                    <p>{{ game.price }}</p>
                </div>
            </template>
        </Game>
    </div>
</template>

<script setup lang='ts'>
import Category from './Category.vue';


</script>

<style>
.content {
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    padding: 10px;
    margin: 10px 0;
}
</style>