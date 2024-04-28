<script setup></script>



<template>
    <div class="bg_Earth">
        <div class="text"><h2>НАШИ КЛИЕНТЫ ИЗ ВСЕГО МИРА</h2></div>
        <div class="video">
            <video muted loop autoplay plays-inline>
                <source src="/public/video/ConsutVideo.webm">
            </video>
        </div>
        <div class="sticky">
            <img src="/public/sticky/Canada.svg" />
            <img src="/public/sticky/British.svg" />
            <img src="/public/sticky/Germany.svg" />
            <img src="/public/sticky/KOREYA.svg" />
            <img src="/public/sticky/Uzbekistan.svg" />
        </div>
    </div>
</template>


<style>
.bg_Earth{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    text-align: center;
    padding-top:70px ;
}
.bg_Earth .video video{
    overflow: hidden;
    object-position: center;
    width: 100%;

}
.bg_Earth .video{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    overflow: hidden;
}
.sticky{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
}
.sticky img{
    width: 115px;
}
.sticky:first-child{
    position: relative;
    top: 60px;
    left: 1200px;
}
.sticky img:nth-child(2){
    position: relative;
    top: -90px;
}
.sticky img:nth-child(3){
    position: relative;
    left: -50px;
    top: -30px;
}
.sticky img:nth-child(4){
    position: relative;
    left: 90px;
    top: 55px;
}
.sticky img:last-child{
    position: relative;
    top: 60px;
    left: -200px;
}
</style>