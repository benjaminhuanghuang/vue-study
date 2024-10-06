<template lang="">
    <div>
        
    </div>
</template>
<script setup lang="ts">
import { getList } from '../api/index.ts';

defineProps<{
    age: number,
    name?: string
}>();

const list = getList({
    page: 1,
    pageSize: 10
});  
</script>
<style lang="">

</style>