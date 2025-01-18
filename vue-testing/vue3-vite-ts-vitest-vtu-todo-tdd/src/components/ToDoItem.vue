<template>
    <button data-test="todo-item" class="todo-item" @click="onClick">
        {{ data.title }}
    </button>
</template>

<script setup lang='ts'>
import type { ToDoItem } from '../types';

const props = defineProps<{
    data: ToDoItem
}>();

const emit = defineEmits<{
    (e: 'on-click', data: number): void
}>();

/*
    template inline style:
        @click="$emit('on-click', data.id)">
*/
function onClick() {
    emit('on-click', props.data.id);
}   
</script>

<style scoped>
.todo-item {
    border: 1px solid #ccc;
    text-align: left;
    padding: 10px;
}
</style>