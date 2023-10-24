<script>
    export default {
        data() {
            return {
                isGameOpen: false
            }
        },
        setup() {
            // const playAnim = () => {
            //     this.isGameOpen = true;
            // }
            // this.playAnim();
            // return {
            //     // playAnim
            // }
        },

        methods: {
            playAnim() {
                console.log(this.isGameOpen)
                this.isGameOpen = true; 
                console.log(this.isGameOpen)
            }
        }
    }
</script>

<template>
    <div class="frame">
        <img class = "up"
        :style="isGameOpen?'visibility: hidden; animation-play-state: running;':'animation-play-state: paused;'" 
        src="/src/assets/game/bg_01.png">

        <div class="middle" 
        :style="isGameOpen?'; animation-play-state: running;':'animation-play-state: paused;'"></div>

        <img class = "down" 
        :style="isGameOpen?'visibility: hidden; animation-play-state: running;':'animation-play-state: paused;'" 
        src="/src/assets/game/bg_02.png">
        
    </div>
</template>

<style>
    .frame {
        position: absolute;
        left: 0;
    }
    .up {
        position: relative;
        left: 0;
        bottom: -1vh;
        animation: hide 1s;
        animation-fill-mode: forwards;
        
    }
    .middle {
        width: 100vw;
        height: 40vh;
        background-color: white;
        left: 0;
        animation: open 1s;
        animation-fill-mode: forwards;
    }
    .down {
        position: relative;
        left: 0;
        top: 0vh;
        animation: hide 1s;
        animation-fill-mode: forwards;
    }

    @keyframes open {
        0% {
            height: 0;
        }
        50% {
            height: 60vh;
        }
        
        80% {
            height: 40vh;
        }
        100% {
            height: 40vh;
        }
    }

@keyframes hide {
    0% {
        visibility: hidden;
    }
    1% {
        visibility: visible;
    }
    100% {
        visibility: visible;
    }
}

</style>