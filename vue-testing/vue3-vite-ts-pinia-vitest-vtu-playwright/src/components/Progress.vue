<template>
        <div id="percentage">0%</div>
        <button id="increment-btn" @click="progress.increment()"></button>
</template>

<script setup lang="ts">
import { useProgressStore } from '@/stores/progress';
const progress = useProgressStore();
</script>

<style></style>
