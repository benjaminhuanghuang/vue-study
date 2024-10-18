<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class editing' when editing and "completed" when marked as completed-->
           <li v-for="item in list" :key="item.id" :class="{completed: item.done}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.done" />
                    <label>{{ item.name }}</label>
                    <button class="destroy" @click="deleteTodo(item.id)"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template" />
            </li>   
        </ul>
    </section>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import useStore from '../store';
const { main } = useStore();
const {getTodos, deleteTodo} = main;

//storeToRefs preserves reactivity when you destructure the state.
const {list } = storeToRefs(main); //

getTodos();
</script>

<style></style>