<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import BlockUtil from "./BlockUtil.ts"
import Playfield, { ROWS as PLAY_FIELD_ROWS, COLS as PLAY_FIELD_COLS } from "./Playfield.ts"
import Tetris, { TETRIS_TYPE, ROWS as TETRIS_ROWS, COLS as TETRIS_COLS } from "./Tetris.ts"

let dropTimer: number | null = null
let dropTimerCnt = 0

const MAX_DROP_DELAY = 10
let dropDelay = MAX_DROP_DELAY

const playfield = ref<Playfield>(new Playfield());
const nextTetris = ref<Tetris|null>(null);
const curTetris = ref<Tetris|null>(null);
const clearableLines = ref<number[]>([]);
const isGameOver = ref<boolean>(false);
const isPaused = ref<boolean>(false);
const isStart = ref<boolean>(false);
const score = ref<number>(0);


/*
Computed    
*/
const playfieldBlocks = computed(() => {
    if (!curTetris) return playfield.value.blocks

    const pBlock = playfield.value.blocks ? BlockUtil.deepCopy(playfield.value.blocks as number[][]) : []
    const { blocks: tBlocks, position } = curTetris.value || { blocks: null, position: 1 };
    const { row: offsetRow, col: offsetCol } = position as { row: number, col: number };
    return tBlocks ? BlockUtil.merge(pBlock, tBlocks, offsetRow, offsetCol) : pBlock
});

const level = computed<number>(() => Math.floor(score.value / 1000) + 1);

/*
Lifecycle
*/
onMounted(() => {
    createNextTetris()
    window.addEventListener('keydown', onKeydown)
})

/*
Methods
*/
function createNextTetris() {
    const type = Math.floor(Math.random() * TETRIS_TYPE.length)
    const rotate = Math.floor(Math.random() * 3)
    nextTetris.value = new Tetris(type, rotate)
}

function dropTetris() {
    curTetris.value = nextTetris.value
    curTetris.value!.position = {
        row: -TETRIS_ROWS,
        col: Math.floor((PLAY_FIELD_COLS - TETRIS_COLS) / 2)
    }

    for (let i = 0; i < TETRIS_ROWS; i++) {
        if (!moveTetris(1, 0)) break;
    }

    createNextTetris()
}

function isCollided(offsetRow: number, offsetCol: number, rotate: number) {
    return playfield.value.isCollided(curTetris, offsetRow, offsetCol, rotate)
}

function moveTetris(offsetRow: number, offsetCol: number) {
    if (!isCollided(offsetRow, offsetCol, 0)) {
        curTetris.value?.move(offsetRow, offsetCol)
        return true
    } else {
        if (offsetRow > 0) fixTetris()
        return false
    }
}

function rotateTetris(rotate: number) {
    if (!isCollided(0, 0, rotate)) {
        curTetris.value!.rotate(rotate)
    }
}
function addScore(score: number) {
    score += score
    dropDelay = Math.max(MAX_DROP_DELAY - level.value + 1, 1)
}

function fixTetris() {
    addScore(50)
    playfield.value.merge(curTetris)

    if (curTetris.value!.position.row < 0) {
        gameOver()
    } else {
        clearLines()
        dropTetris()
    }
}
function clearLines() {
    const { row: from } = curTetris.value!.position
    const clearLines
        = clearableLines.value
        = playfield.value.getClearableLines(from, from + TETRIS_ROWS)

    if (clearLines.length) {
        // 累计积分. 消除 n 行得到的积分为 (2 ^ n) * 100 
        addScore((2 ** clearLines.length) * 100)

        setTimeout(() => {
            playfield.value.clearLines(clearLines)
            clearLines.splice(0)
        }, 400)
    }
}

function startDropTimer() {
    if (!dropTimer) {
        dropTimer = setInterval(() => {
            if (dropTimerCnt++ > dropDelay) {
                moveTetris(1, 0)
                dropTimerCnt = 0
            }
        }, 50)
    }
}

function stopDropTimer() {
    if (dropTimer) {
        clearInterval(dropTimer)
        dropTimer = null
    }
}

function gameOver() {
    stopDropTimer()
    isGameOver.value = true
    isStart.value = false
}

function onKeydown(e: KeyboardEvent) {
    if (!isStart.value || isPaused.value) return;

    switch (e.code) {
        case 'ArrowUp':
            rotateTetris(-1)
            break;
        case 'ArrowLeft':
            moveTetris(0, -1)
            break;
        case 'ArrowRight':
            moveTetris(0, 1)
            break;
        case 'ArrowDown':
            moveTetris(1, 0)
            break;
    }
}

function start() {
    isGameOver.value = false
    isStart.value = true
    score.value = 0
    dropDelay = MAX_DROP_DELAY
    curTetris.value = null
    playfield.value.clearAll()
    dropTetris()
    startDropTimer()
}
function pause() {
    stopDropTimer()
    isPaused.value = true
}

function resume() {
    startDropTimer()
    isPaused.value = false
}



</script>

<template>
    <!-- gave area -->
    <div class="playfield">
        <template v-for="(row, rowIndex) in playfieldBlocks">
            <div v-for="block in row" class="block"
                :class="{ ['b' + block]: true, blink: clearableLines.includes(rowIndex) }">
            </div>
        </template>
        <div v-if="isGameOver" class="game-over">
            <h1>GAME OVER</h1>
        </div>
    </div>
    <!-- side bar -->
    <div class="aside">
        <div>
            <!-- Next tetris -->
            <div v-if="nextTetris" class="nextTetris">
                <template v-for="row in nextTetris.blocks">
                    <div v-for="block in row" class="block" :class="{ ['b' + block]: true }"></div>
                </template>
            </div>
            <!-- Score -->
            <h2 class="record">Score<span>{{ score }}</span></h2>
            <h2 class="record">Level<span>{{ level }}</span></h2>
        </div>
        <!-- Control buttons -->
        <div class="controls">
            <button v-if="!isStart" @click="start">Start</button>
            <button v-if="isStart && !isPaused" @click="pause">Pause</button>
            <button v-if="isPaused" @click="resume">Resume</button>
            <button v-if="isStart" @click="start">Restart</button>
        </div>
    </div>
</template>
