<template lang="">
    <div>
        <h1>Todo App</h1>
        <form data-test="form" @submit.prevent="createTodo">    
        <input data-test="new-todo" type="text" v-model="newTodo" />
         <button>Add Todo</button>
        </form>
        <ul >
            <li v-for="todo in todos" 
            :key="todo.id"  
            data-test="todo" 
            :class="[todo.completed ? 'completed' : '']">
                <input data-test="todo-checkbox" type="checkbox" v-model="todo.completed" />
                <span>{{ todo.title }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'TodoApp',
    data() {
        return {
            todos: [
                {
                    id: 1,
                    title: 'Task 1',
                    completed: false
                }
            ],
            newTodo: ''
        }
    },
    methods: {
        createTodo() {
            this.todos.push({
                id: this.todos.length + 1,
                title: this.newTodo,
                completed: false
            });
            this.newTodo = '';
        }
    }
}
</script>
<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>