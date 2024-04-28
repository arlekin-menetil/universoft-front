<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="antivirus">
        <div class="box"><h1>Антивирус</h1></div>
        <div class="text_antivirus">
            <p>Наша Компания предоставляет первое в Узбекистане антивиросное решение локальной разработки при поддержке российской "Лаборатории Касперского". Программный продукт получил название <br> UZGUARD AV</p>
            <p>UZGUARD AV от UNIVERSOFT IT и "Лаборатории Касперского" повышает кибербезопасноть Узбекистана. Сотрудничество защищает критически важные активы и цифровую экосистему страны, повышая уровень цифровой безопасности и устойчивости.</p>
        </div>
        <h2>Возможности Антивируса:</h2>
        <ul>
            <div>
            <li><span>Обнаружение</span> шпионских  приложений, отслеживающих переписки  и местоположение</li>
            <li><span>Прогнозирование и предотвращение</span> распространенных и сложных угроз с помощью ИИ и эвристического анализа</li>
            <li><span>Борьба с рекламным ПО</span>. Анти-Баннер и Анти-Спам</li>
        </div>
        <div>
            <li><span>Защита</span> от вредоносного ПО,  троянцев, руткитов, программ-вымогателей  и других  угроз</li>
            <li><span>Автоматическое устранение</span> уязвимостей на ПК . Обновление программ и Очистка компьютера
            </li></div>
        </ul>
    </div>
    <Footer />
</template>

<style>
.antivirus{
    width: 100%;
    background: #000;
    padding: 150px;
}
.antivirus h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_antivirus{
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
.text_antivirus p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.antivirus ul{
    display: flex;
    font-size: 15px;
    justify-content: space-around;
}
.antivirus ul li{
    margin:50px 25px 50px 0;
    height: 50px;
    padding-left: 60px;
    padding-top: 10px;
    width: 550px;
}
.antivirus ul li span{
    color: #82F7FF;
}
.antivirus ul div:first-child li:first-child{
    background: url('/public/icons/antivirus/found.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.antivirus ul div:first-child li:nth-child(2){
    background: url('/public/icons/antivirus/prognozi.png');
    background-size: 35px;
    background-repeat: no-repeat;
    background-position: center left;
}
.antivirus ul div:first-child li:last-child{
    background: url('/public/icons/antivirus/fight.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
    padding-top: 15px;
}
.antivirus ul div:nth-child(2) li:first-child{
    background: url('/public/icons/antivirus/security.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.antivirus ul div:nth-child(2) li:last-child{
    background: url('/public/icons/antivirus/automatic.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>