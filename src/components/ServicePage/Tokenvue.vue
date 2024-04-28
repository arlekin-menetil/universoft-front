<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="token">
        <div class="box"><h1>Токены ЭЦП</h1></div>
        <div class="text_token">
            <p>Ключевые носители UzGuard — линейка USB-токенов и смарт-карт узбекского производства для подписания документов ЭЦП и строгой двухфакторной аутентификации на настольных и мобильных устройствах. Продукты линейки являются полнофункциональными аппаратными СКЗИ. </p>
            <p>Поддержка максимального спектра стандартов информационной безопасности позволяет использовать решения UzGuard в информационных системах с высокими требованиями к ИБ. Инструменты SDK позволяют встраивать поддержку устройств в классические, мобильные и веб-приложения.</p>
            <ul style="margin-top: 35px;">
                <div style="margin:15px 50px 0 0; text-align: left; ">
                <ol>Бесконтактные NFC-устройства для ЭЦП  на мобильных устройствах</ol>
                <ol>Защищенное хранение и использование  ключей ЭЦП</ol>
                <ol>Двухфакторная аутентификация  пользователей</ol>
                <ol>Защита аккаунтов в веб-приложениях  и сервисах</ol>
            </div>
            <div>
                <img src="/public/icons/token/uzgard.png" alt="">
            </div>
            </ul>
        </div><h2>Возможности ЭЦП:</h2>
        <ul>
            <div>
            <li>Бесконтактные NFC-устройства для ЭЦП  на мобильных устройствах</li>
            <li>Защищенное хранение и использование  ключей ЭЦП</li>
            <li>Двухфакторная аутентификация  пользователей</li>
            <li>Защита аккаунтов в веб-приложениях  и сервисах</li>
        </div>
        </ul>
        <img style="margin-left: 150px;" src="/public/icons/token/logotip.png" alt="">
    </div>
    <Footer />
</template>

<style>
.token{
    width: 100%;
    background: #000;
    padding: 150px;
}
.token h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_token{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    padding: 0 25px;
    color: rgba(255,255,255, 0.4); 
    margin-bottom: 25px;
}
.text_token p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.token ul{
    display: flex;
    font-size: 20px;
    justify-content: flex-start;
}
.token ul li{
    margin:50px 0 50px 0;
    height: 50px;
    padding-left: 60px;
    padding-top: 10px;
}
.token ul ol{
    margin:50px 0 50px 0;
    height: 50px;
    padding-left: 60px;
    padding-top: 10px;
}
.token ul div:first-child li:first-child{
    background: url('@public/icons/token/NFC.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.token ul div:first-child li:nth-child(2){
    background: url('@public/icons/token/hranilishe.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.token ul div:first-child li:nth-child(3){
    background: url('@public/icons/token/Dvoinaya.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.token ul div:first-child li:last-child{
    background: url('@public/icons/token/veb.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.token ul div:first-child ol:first-child{
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.token ul div:first-child ol:nth-child(2){
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.token ul div:first-child ol:nth-child(3){
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.token ul div:first-child ol:last-child{
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>