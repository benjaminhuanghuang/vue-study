<template>
    <div class="main">
        <h2 class="times">{{ }} times left.</h2>
        <div class="rotate">
            <!-- board -->
             <img src="@/assets/board.jpeg" alt="pointer" class="board" :style="{transform: rotate_deg, transition:rotate_transition}" />
            <!-- pointer -->
            <img src="@/assets/pointer.png" alt="pointer" class="pointer" @click='start()'/>
             
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rotate_deg = ref('');   // board rotate degree
const rotate_transition = ref('transform 3s ease-in-out');   // animation transition time
const times = ref(3);
const isRunning = ref(false);

function start(){
    console.log('start');
    if(times.value <= 0){
        alert('No times left!');
        return;
    }
    times.value--;
    rotating();
}

function rotating() {
    if(isRunning.value){
        return;
    }
    isRunning.value = true;
    
    let rand_circle = Math.floor(Math.random()*10);  // turn 0-10 circles
    let winIndex = getWinIndex();

    let randomDeg = 360 - winIndex * 45;
    let deg = rand_circle * 360 + randomDeg;
    rotate_deg.value = `rotate(${deg}deg)`;

    setTimeout(() => {
      isRunning.value = false;
      rotate_deg.value = `rotate0deg)`;
      rotate_transition.value = '';
      if(winIndex === 5){
          alert('Congratulations! You win the first prize!');
      }else if(winIndex === 6){
            alert('Congratulations! You win the second prize!');
      }
    }, 3000);  
}

function getWinIndex(){
    let winIndex;
    const rand = Math.random();
    if(rand < 0.3){
        winIndex = 5;
    }else if(rand < 0.55){
        winIndex = 6;
    }else if(rand < 0.75){
        winIndex = 4;
    }else if(rand < 0.85){
        winIndex = 0;
    }else if(rand < 0.92){
        winIndex = 2;
    }else if(rand < 0.97){
        winIndex = 1;
    }else if(rand < 0.99){
        winIndex = 3;
    }else {
        winIndex = 7;
    }
    return winIndex;
}
</script>

<style scoped> 
.main {
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    text-align:center;
}
.board{
    width:500px;
    height:300px;
}   
.pointer{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:100px;
    height:100px;
}
</style>