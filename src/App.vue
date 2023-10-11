<script>
  export default {
    data() {
      return {
        starsCount: 800,
        distance: 900
      }
    },
    mounted() {
      let startNode = Array.from(this.$refs.starsRef.children);
      startNode.forEach((item) => {
        let speed = 0.2 + Math.random() * 1;
        let thisDistance = this.distance + Math.random() * 300;
        item.style.transformOrigin = `0 0 ${thisDistance}px`;
        item.style.transform = `
          translate3d(0, 0, -${thisDistance}px)
          rotateY(${Math.random()*360}deg)
          rotateX(${Math.random()*-50}deg)
          scale(${speed},${speed})
          `;
      }) 
    }
  }
</script>

<template>
  <div class="background">
    <div class="stars" ref="starsRef">
      <div class="star" v-for="(item, index) in starsCount" :key="index"></div>
    </div>
    <svg class="canvas">
      <foreignObject width="100%">
      </foreignObject>
    </svg>
    <P class="word">
      致世界上最可爱的天使，倩倩：
    </P>
  </div>
</template>

<style scoped>

svg {
  width: 90vw;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.1);
}

.background {
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  margin: 0;
  padding: 0;
  background: radial-gradient(100% 105% at bottom center, 
  #eeee91, 
  #e96f92, 
  #1b2947);
  background-attachment: fixed;
  overflow: hidden;
}
.stars {
  display: grid;
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 45%;
  animation: rotate 80s infinite linear;
  bottom: 0;
}

.star {
  width: 2px;
  height: 2px;
  background: #f7f7b6;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}

.word {
  font-size:x-large;
  font-style:oblique;
  position: absolute;
  animation: transfer 3s;
  animation-fill-mode: forwards;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }

  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}

@keyframes transfer {
  from {
    margin-bottom: 0vh;
    color: #1b2947;
  }
  to {
    margin-bottom: 70vh;
    color: white;
  }
}
</style>