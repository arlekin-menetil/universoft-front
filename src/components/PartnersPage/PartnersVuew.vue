<script setup>
</script>

<template>
<div class="Partners">
    <div class="box">
        <span style="--i:1;"><a href=""><h3>Asbis</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:2;"><a href=""><h3>Axsoft</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:3;"><a href=""><h3>Актив-Софт</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:4;"><a href=""><h3>Анлиметед<br> Продакшн</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:5;"><a href=""><h3>Лаборатория <br>Касперского</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:6;"><a href=""><h3>Positive<br> Technologies</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:7;"><a href=""><h3>BaseAlt</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:8;"><a href=""><h3>InfoWatch</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:9;"><a href=""><h3>Код <br>Безопасности</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:10;"><a href=""><h3>Security<br> Vision</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
        <span style="--i:11;"><a href=""><h3>Teltonika</h3><img src="../../../public/carusel/Group 39509.svg" alt=""></a></span>
    </div>
    <div class="text">
        <h4>Наши партнеры</h4>
        <h3>Сотрудничество и доверие: кто рядом <br> с нами</h3>
    </div>
</div>
</template>

<style>
.Partners{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    padding-top: 180px;
}
.text h4{
color: #82F7FF;
padding-top: 50px;
font-size: 18px;
font-weight: bold;
}
.box{
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: animate 20s linear infinite;
}
@keyframes animate{
    0%{
        transform: perspective(800px) rotateY(0deg);
    }
    100%{
        transform: perspective(800px) rotateY(360deg);
    }
}
.box span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 65deg)) translateZ(380px);
}
.box span h3{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #82F7FF;
    font-weight: bold;
    z-index: 1;
}
.box span a img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>