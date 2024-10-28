<template>
    <div class="child">
        <h3>Child</h3>
    </div>
</template>

<script setup lang='ts'>
import { ref} from 'vue';
let toy = ref('Doll');

defineExpose({
    toy
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