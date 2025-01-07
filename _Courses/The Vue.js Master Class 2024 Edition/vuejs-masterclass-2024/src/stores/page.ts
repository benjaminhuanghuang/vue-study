import { ref } from 'vue';
import {defineStore} from 'pinia'

export const usePageStore= defineStore('page-store', ()=> {
    const pageData = ref({
    });
});