<template>
    <div class="module-player">
        <div class="flex-1">

        </div>
        <div class="flex-1">
            <PauseOne v-if="isPlaying" theme="filled" size="50" fill="green" @click="togglePlay" />
            <Play v-else theme="filled" size="50" fill="green" @click="togglePlay" />

        </div>
        <div class="flex-1">

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { Play, PauseOne, Next, Prev, Volume, Loop, Random, List } from '@icon-park/vue-next';
import {useStore} from '../store';

const {isPlaying, togglePlay} = toRefs(seStore());
  
</script>
<style scoped lang="scss"></style>