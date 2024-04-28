<script setup></script>


<template>
    <div class="Nav">
        <div class="header">
        <div class="logo">
            <a class="logo" href="/">
            <img src="/public/icons/button_universoft.svg">
            </a>
        </div>
        <nav>
        <ul>
            <li><a href="about">О компании</a></li>
            <li><a href="service">Услуги</a></li>
            <!--<li><a href="portfolio">Портфолио</a></li>-->
            <li><a href="partners">Наши партнеры</a></li>
            <li><a href="Vacancy">Вакансии</a></li>
            <li><a href="contact">Контакты</a></li>
        </ul>
        </nav>
        <div class="lannumber">
            <div class="call"><a href="tel:+998997735295">+998 99 773 52 95</a></div>
        </div>
        </div>
    </div>
</template>




<style>
.Nav{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    position: fixed;
    top: 0;
    z-index: 1;
}
nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav li a{
    color: rgba(255,255,255, 0.5);
}
nav li a:hover{
    color: #82F7FF;
    transition: 0.2s;
}
.call{
    padding: 14px 40px;
    background: #ffffff;
    border-radius: 15px;
}
.call a{
color: #000;
}
.videoback{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
}
/*background*/
.Nav .videoback video{
    width:100%;
    height: 100vh;
    left:0;
    top: 0;
    z-index: -1;
    object-fit: cover;
    position: absolute;  
}
</style>