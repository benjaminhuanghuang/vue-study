<template>
    <div class="child">
        <h3>Child</h3>
    </div>
</template>

<script setup lang='ts'>
import { on } from 'events';
import { ref, defineEmits, onMounted } from 'vue';
import emitter from '@/utils/emitter';

emitter.on('talk', () => {
    console.log('test');
});

</script>

<style scoped>
.child {
    background-color: rgb(76, 209, 76);
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>