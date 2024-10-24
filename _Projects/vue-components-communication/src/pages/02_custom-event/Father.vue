<template>
    <div class="father">
        <h3>Father</h3>
        
        <Child @talk = "talkHadler"/>
    </div>
</template>

<script setup lang='ts'>
    import Child from './Child.vue';
    import { ref } from 'vue';

    function talkHadler(message: string) {
        console.log(message);
    }

</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding:20px;
    border-radius: 10px;
}

</style>   