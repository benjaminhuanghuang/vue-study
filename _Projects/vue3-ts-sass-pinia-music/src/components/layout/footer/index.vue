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
import { ref } from 'vue';
import { Play, PauseOne, Next, Prev, Volume, Loop, Random, List } from '@icon-park/vue-next';

let isPlaying = ref<boolean>(false);
let audio = new Audio("https://music.163.com/song/media/outer/url?id=1345848098.mp3");

function togglePlay() {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
        audio.play();
    } else {
        audio.pause();
    }
}

</script>
<style scoped lang="scss"></style>