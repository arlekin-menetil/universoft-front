<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="Soc">
        <div class="box"><h1>DLP система</h1></div>
        <div class="text_Soc">
            <p> <span>Центр обнаружения и обезвреживания кибератак (Security Operation Centre)</span> <br> 
                <span>XDR (Extended Detection and Response) + SOAR (Security Orchestration, Automation and Response)</span> <br>
                Единая платформа координации и управления системами безопасности,  расширенное обнаружение и реагирование на сложные угрозы и целевые атаки.

            </p>
        </div>
        <ul>
            <div>
                <img style="width: 1200px;" src="../../../public/icons/soc/Рисунок6.png"/>
        </div>
        </ul>
        <h2 style="margin: 25px 0 25px 0;">Возмоности системы:</h2>
        <ul>
            <div>
            <li>Защита электронной почты <br> и анализ сетевого трафика
            </li>
            <li>Передовое обнаружение сложных<br> угроз на всех уровнях и<br> реагирование на них
            </li>
            <li>Комплексный мониторинг и<br> корреляция событий ИБ
            </li>
            <li>Автоматическая защита конечных<br> точек (физических, мобильных и <br>виртуальных) от массовых угроз
            </li>
        </div>
            <div>
                <li>Повышение киберграмотности
                </li>
                <li>Управление аналитическими<br> данными о киберугрозах
                </li>
                <li>Ретроспективный анализ и песочница
                </li>
            </div>
        </ul>
    </div>
    <Footer />
</template>

<style>
.Soc{
    width: 100%;
    background: #000;
    padding: 150px;
}
.Soc h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_Soc{
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
.text_Soc p:first-child{
    margin-bottom: 42px;
}
.text_Soc p span{
    color: #82F7FF;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.Soc ul{
    display: flex;
    font-size: 17px;
    justify-content: space-around;
}
.Soc ul li{
    margin:50px 15px 50px 0;
    height: 50px;
    padding-left: 60px;
    color: #82F7FF;
}
.Soc ul div:first-child li:first-child{
    background: url('../../../public/icons/soc/Рисунок7.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Soc ul div:first-child li:nth-child(2){
    background: url('../../../public/icons/soc/Рисунок8.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Soc ul div:first-child li:nth-child(3){
    background: url('../../../public/icons/soc/Рисунок9.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Soc ul div:first-child li:last-child{
    background: url('../../../public/icons/soc/Рисунок10.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Soc ul div:nth-child(2) li:first-child{
    background: url('../../../public/icons/soc/Рисунок11.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Soc ul div:nth-child(2) li:nth-child(2){
    background: url('../../../public/icons/soc/Рисунок12.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Soc ul div:nth-child(2) li:last-child{
    background: url('../../../public/icons/soc/Рисунок13.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center left;
    padding-top: 10px;
}
</style>