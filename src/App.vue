<script>
import HeartComp from "./Component/HeartComp.vue"
import GamePart from "./Component/GamePart.vue"
import { ref } from 'vue'
export default {
  components: { HeartComp, GamePart },
  data() {
    return {
      starsCount: 800,
      distance: 900,
      canClick: false,
      isClickOver: false,
      currentSentenceIndex: 0,
      isChangeSentenceFinished: true,
      isStartShow: false,
      currenPosition: [0, 0],
      sentence: [
        "转眼间已经相处了364天啦， 在过一天就已经是我们的一周年纪念日了，因此我真的有很多很多的话想要去告诉你",
        "首先，谢谢你能够一直陪伴着我，关心我，给予我满满的安全感与爱",
        "在我和倩倩相处的这短暂的日子里我真的真的不止一次在说我喜欢倩倩,倩倩也一直在向我确认",
        "但是我还是想说，不管以后遇到什么事情，我都会一直爱着倩倩",
        "今天，明天，后天",
        "今年，后年，明年",
        "以及未来存在的每一天",
        "我都会一直一直一直陪伴在倩倩身边",
        "陪伴你成长，陪伴你学习，陪伴你生活",
        "如果倩倩不会的东西，我来解决",
        "让倩倩难过的人也请交给我处理，虽然我也是社恐，但是我会为了倩倩努力变得强起来",
        "因此，请给我时间，我也会变得更好，来变得更加的值得倩倩依靠",
        "另外，在我的心目中你早就已经成为了我的家人顺位里的绝对第一",
        "所以才不要担心我会不喜欢你",
        "你一直一直都是最可爱的哪一个",
        "你是小公主，你是我的乖妹妹，也是我最爱的那个未来的妻子",
        "因此，我会为了娶倩倩努力，为了我们未来的家啊努力，倩倩也是我们一起成长",
        "好啦，恭喜我们家的小倩倩已经看到这里啦，这是我给倩倩的专属小网站，希望能让倩倩更加开心！！",
        "The End"
      ]
    }
  },
  setup() {
    const playAnimControl = ref(null)
    return {
      playAnimControl
    }
  },
  mounted() {
    
    console.log("play")
    window.addEventListener('mousemove', this.moveMouseWithMethod)
    window.addEventListener('click', this.mouseClick)
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
  },
  methods: {
    moveMouseWithMethod() {
      let wusaki = document.getElementsByClassName("wusaki")
      window.addEventListener('mousemove', function(ev) {
        wusaki[0].style.left = (ev.pageX) + 'px';
        wusaki[0].style.top = (ev.pageY) + 'px';
      });
    },

    openGame() {
      if (this.canClick) {
        console.log("点击爱心")
        this.playAnimControl.playAnim()
        this.isClickOver = true
      }
    },

    changeSentence() {
      this.currentSentenceIndex ++;
      if (this.currentSentenceIndex > this.sentence.length-1) {
        this.currentSentenceIndex=this.sentence.length-1;
      }
      this.isChangeSentenceFinished = false
    },

    mouseClick() {
      window.addEventListener('click', function(ev) {
        this.currenPosition = [ev.pageX, ev.pageY] 
      });
    }
  }
}
</script>

<template>
  <div class="background">
    <div class="stars" ref="starsRef">
      <div class="star" v-for="(item, index) in starsCount" :key="index"></div>
    </div>
    <game-part ref="playAnimControl" class="gamePart"></game-part>
    <img class = "treeL" src="/src/assets/treeL.png" :style="!isClickOver?'visibility: hidden; animation-play-state: paused;':'visibility: visible; animation-play-state: running;'" @animationend="isStartShow = true">
    <img class = "treeR" src="/src/assets/treeR.png" :style="!isClickOver?'visibility: hidden; animation-play-state: paused;':'visibility: visible; animation-play-state: running;'">
    <img class= "chii" src="/src/assets/chii.png">
    <img class = "hachi" src="/src/assets/hachi.png">
    <img class = "wusaki" src="/src/assets/wusaki.png">

    <heart-comp class="heart" @click="openGame" :style="canClick&&!isClickOver?'visibility: visible;':'visibility: hidden;'"></heart-comp>
    <P class="word2" @animationend="canClick=true" :style="!isClickOver?'visibility: visible;':'visibility: hidden;'">
      请收下我对你满满的爱！！
    </P>
    <P class="word">
      致世界上最可爱的天使，倩倩：
    </P>

    <button :class="!isChangeSentenceFinished?'sentence':'sentenceOff'" v-text="sentence[currentSentenceIndex]" 
      @click="changeSentence" 
      @animationend="isChangeSentenceFinished = true" 
      :style="isStartShow?'visibility: visible;':'visibility: hidden;'">
      
    </button>

    <p class="hintText" :style="isStartShow?'visibility: visible;':'visibility: hidden;'" v-text="'↑点击上方文字以继续↑'"></p>
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
  background-image: url("/src/assets/main_bg.jpg");
  background-size: 100%;
  background-attachment: fixed;
  overflow: hidden;
}

.hintText{
  position: absolute;
  color: palevioletred;
  font-family: "ACG1";
  bottom: 10vh;
    left: 50vw;
  transform: translate(-50%, -50%);
  font-size: 2vh;
  animation: flow 1s infinite;
}
.stars {
  display: grid;
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  color: greenyellow;
  left: 45%;
  animation: rotate 80s infinite linear;
  bottom: 0;
}

.chii {
  width: 10vh;
  position: absolute;
  animation: chiiRotate 1s infinite;
  left: 0%;
}

.treeL {
  height: 40vh;
  position: absolute;
  left: -3vw;
  animation: treeAppearL 2s;
  animation-fill-mode: forwards;
}

.treeR {
  height: 40vh;
  position: absolute;
  right: -3vw;
  animation: treeAppearR 2s;
  animation-fill-mode: forwards;
}
.hachi {
  width: 10vh;
  position: absolute;
  animation: hachiRotate 5s infinite;
  right: 0vw;
}
.wusaki {
  width: 5vh;
  position: absolute;
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
  font-size:xx-large;
  position: absolute;
  animation: transfer 3s;
  animation-fill-mode: forwards;
  font-family: "ACG1";
}

.sentence {
  font-size:2vh;
  position: absolute;
  left: 50vw;
  top: 50vh;
  color: palevioletred;
  font-family: "ACG1";
  animation: changeSentenceAnim 1s;
  animation-fill-mode: forwards;
  position: absolute;
  border: 0cap;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

.sentenceOff {
  font-size:2vh;
  position: absolute;
  left: 50vw;
  top: 50vh;
  color: palevioletred;
  font-family: "ACG1";
  position: absolute;

  border: 0cap;
  border-color: rgba(0, 0, 0, 0);
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0);
}



.word2 {
  font-size:x-large;
  position: absolute;
  animation: transfer2 1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  color: rgba(0, 0, 0, 0);
  height: 2vh;
  font-family: "ACG1";
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }

  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
@keyframes flow {
    50% {
      font-size: 200%;
    }
}
@keyframes changeSentenceAnim {
  0% {
    font-size:0vh;
    opacity: 0;
  }
  20% {
    font-size:3vh;
    opacity: 100%;
    width: 100vw;
  }
  100% {
    font-size:2vh;
    opacity: 100%;
  }
}

@keyframes chiiRotate{
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(20deg);
  }
  20% {
    transform: rotateZ(-20deg);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes hachiRotate{
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5vh);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes transfer {
  from {
    margin-bottom: 0vh;
    color: black;
  }
  to {
    margin-bottom: 70vh;
    color: black;
  }
}

  @keyframes transfer2 {
  from {
    margin-bottom: 20vh;
    color: rgba(0, 0, 0, 0);
  }
  to {
    margin-bottom: 20vh;
    color: black;
  }
}

  @keyframes treeAppearL {
    0% {
      left: -10vh;
    }
    10% {
      left: 5vh;
    }
    30% {
      left: -3vh;
    }
  }
  @keyframes treeAppearR {
    0% {
      right: -10vh;
    }
    10% {
      right: 5vh;
    }
    30% {
      right: -3vh;
    }
  }
</style>