<template>
    <div class="heart"></div>

</template>

<style>

.heart {
    position: absolute;
    width: 300px;
    height: 270px;
}
.heart:before, .heart:after {
    position: absolute;
    content: "";
    left: 150px;
    top:0;
    width: 150px;
    height: 240px;
    background-color: #ff0048;
    border-radius: 150px 150px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    background-blend-mode: color;
}
.heart:after {
    left:0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}

@keyframes sport {
    0% {transform: scale(1);}
    10% {transform: scale(1.5);}
    20% {transform: scale(1);}
    
    30% {transform: scale(1);}
    40% {transform: scale(1.5);}
    50% {transform: scale(1);}
}

@keyframes fadeIn {
    0% {background-color: rgba(0,0,0,0);}
    60% {background-color: rgba(0,0,0,0);}
    61% {background-color: #ff0048;}
    100% {background-color: #ff0048;}

}
</style>