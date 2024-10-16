import {defineStore, storeToRefs} from 'pinia';

export const useTestStore = defineStore('test',{
    state:()=>{

    },

    actions:{
        addTodo(){
            this.todos.push({id: this.todos.length + 1, content: 'New Todo', completed: false})
        }
    },
    // computed properties
    getters:{
        getTodos(){
            return this.todos
        }
    }
});