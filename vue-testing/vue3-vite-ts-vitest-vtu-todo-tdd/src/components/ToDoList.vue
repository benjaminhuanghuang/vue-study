<template>
    <div v-for="item in todoItems" :key="item.id" data-test="todo-item">
        {{ item.title }}
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { type TodoItem } from './todo.types'

const todoItems = ref<TodoItem[]>([])

async function fetchTodoItems() {
    //object destructuring
    const { data } = await axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
    todoItems.value = data
}
onMounted(() => {
    fetchTodoItems()
});
</script>

<style></style>