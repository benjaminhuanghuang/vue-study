<template>
    <ToDoItemComponent v-for="item in todoItems" :key="item.id" data-test="todo-item" :data="item">
    </ToDoItemComponent>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import ToDoItemComponent from './ToDoItem.vue';
import { useToDoList } from '@/composables/useToDoList';
import { type ToDoItem } from '@/types';

const todoItems = ref<ToDoItem[]>([]);

const { fetchItems } = useToDoList();

onMounted(async () => {
    todoItems.value = await fetchItems();
});

</script>

<style></style>