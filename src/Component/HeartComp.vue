<script setup>
import { ref } from 'vue';
const count = ref(0);
function reaction() {
    count.value ++;
}
</script>

<template>
    <div class="hrt" @click="reaction">
        <div class="lft"></div>
        <div class="rgt"></div>
    </div>
    <div>{{count}}</div>
</template>

<style>

.hrt {
    position: absolute;
    width: 17.5vh;
    height: 17vh;
    animation: sport 1s infinite;
}
.lft, .rgt {
    position: absolute;
    content: "";
    left: 2vh;
    top:0;
    width: 10vh;
    height: 15vh;
    background-color: #ff0048;
    border-radius: 30vh 30vh 0 0;
    transform: rotate(-45deg);
    background-blend-mode: color;
}
.rgt {
    left:5.6vh;
    transform: rotate(45deg);
}

@keyframes sport {
    0% {transform: translateY(0) scale(1);}
    10% {transform: translateY(1vh) scale(1.5);}
    20% {transform: translateY(0) scale(1);}
    
    30% {transform: translateY(0) scale(1);}
    40% {transform: translateY(1vh) scale(1.5);}
    50% {transform: translateY(0) scale(1);}
}

@keyframes fadeIn {
    0% {background-color: rgba(0,0,0,0);}
    60% {background-color: rgba(0,0,0,0);}
    61% {background-color: #ff0048;}
    100% {background-color: #ff0048;}

}
.hrt:hover{
  animation: sport 0.5s infinite;
  
}
</style>