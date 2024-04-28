<script setup></script>


<template>
    <div class="Content">
        <h2>Компании с которыми<br> 
мы успешно сотрудничаем</h2>
        <div class="carusel" style="--t:20s">
        <div>
        <img src="/public/icons/uzgard.svg" alt="">
        <img src="/public/icons/akfa.svg" alt="">
        <img src="/public/icons/xalk.svg" alt="">
        <img src="/public/icons/hilst.svg" alt="">
        <img src="/public/icons/humo.svg" alt="">
        </div>
        <div>
            <img src="/public/icons/uzgard.svg" alt="">
            <img src="/public/icons/akfa.svg" alt="">
            <img src="/public/icons/xalk.svg" alt="">
            <img src="/public/icons/hilst.svg" alt="">
            <img src="/public/icons/humo.svg" alt="">
            </div>
        </div>
        <div class="carusel" style="--t:22s">
        <div>
            <img src="/public/icons/humo.svg" alt="">
            <img src="/public/icons/hilst.svg" alt="">
            <img src="/public/icons/xalk.svg" alt="">
            <img src="/public/icons/uzgard.svg" alt="">
            <img src="/public/icons/Davr.svg" alt="">
            <img src="/public/icons/akfa.svg" alt="">
        </div>
        <div>
            <img src="/public/icons/humo.svg" alt="">
            <img src="/public/icons/hilst.svg" alt="">
            <img src="/public/icons/xalk.svg" alt="">
            <img src="/public/icons/uzgard.svg" alt="">
            <img src="/public/icons/Davr.svg" alt="">
            <img src="/public/icons/akfa.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style>
.Content{
    width: 100%;
    height: 100vh;
    background: #000 url('/public/bground/grid.svg') no-repeat right top;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.Content h2{
    color: #fff;
    margin-bottom: 100px;
}
.carusel{
    position: relative;
    display: flex;
    width: 1100px;
    overflow: hidden;
    background: #000;
    -webkit-mask-image: linear-gradient(90deg,transparent,#fff 20%,#fff 80%,transparent);
}
.carusel:nth-child(2){
    position: relative;
    display: flex;
    width: 800px;
    overflow: hidden;
    background: #000;
    -webkit-mask-image: linear-gradient(90deg,transparent,#fff 20%,#fff 80%,transparent);
}
.carusel div{
    white-space: nowrap;
    animation: animate var(--t) linear infinite;
    animation-delay: calc(var(--t) * -1);
}
.carusel div:nth-child(2){
    animation: animate2 var(--t) linear infinite;
    animation-delay: calc(var(--t) / -2);
}
@keyframes animate
{
0% {
    transform: translateX(100%);    
}
100%{
    transform: translateX(-100%); 
}
}
@keyframes animate2
{
0% {
    transform: translateX(0);    
}
100%{
    transform: translateX(-200%); 
}
}
.carusel div img{
display: inline-flex;
align-items: center;
margin: 30px;
border-radius: 10px;
transition: .5s;
}
.carusel div img:hover{
    background: #82F7FF;
    cursor: pointer;
}
</style>akfa