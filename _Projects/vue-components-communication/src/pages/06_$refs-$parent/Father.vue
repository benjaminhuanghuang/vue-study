<template>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
</template>

<script setup lang='ts'>
import { ref } from 'vue';

import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

let c1 = ref();

function talkToChild1() {
    c1.value.talk('Hello from father');
    c1.value.toy = 'Car';
}
</script>

<style></style>