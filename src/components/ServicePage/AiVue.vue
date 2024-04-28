<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="ai">
        <div class="box"><h1>Разработка AI</h1></div>
        <div class="text_ai">
            <p>Сотрудниками компании разрабатываются и внедряются информационные системы с использованием искусственного интеллекта, глубокого обучения и нейронных сетей. 
                AI-технологии расширяют возможности бизнеса, повышают производительность труда и дают отправную точку для нового витка развития. </p>
            <p>(Artificial intelligence, AI) — наука и технология создания интеллектуальных машин, особенно интеллектуальных компьютерных программ.
                 ИИ тесно связан со сходной задачей использования компьютеров для понимания человеческого интеллекта, но не обязательно ограничивается биологически правдоподобными методами.</p>
        </div><h2>С помощью ИИ можно разработать:</h2>
        <ul>
            <div>
            <li>Data science – Наука о данных</li>
            <li>Machine learning – Машинное обучение</li>
            <li>Deep learning – Глубокое обучение</li>
            <li>Neural network – Нейронные сети</li>
        </div>
        <div>
            <li>Object detection – Распознавание объектов и образов</li>
            <li>Computer vision – Компьютерное зрение</li>
            <li>Face recognition – Распознавание лиц</li>
            <li>Чат-боты – Виртуальный собеседник </li></div>
        </ul>
    </div>
    <Footer />
</template>

<style>
.ai{
    width: 100%;
    background: #000;
    padding: 150px;
}
.ai h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_ai{
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
.text_ai p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.ai ul{
    display: flex;
    font-size: 20px;
    justify-content: space-around;
}
.ai ul li{
    margin:50px 0 50px 0;
    height: 50px;
    padding-left: 60px;
    padding-top: 10px;
}
.ai ul div:first-child li:first-child{
    background: url('/public/icons/data-science.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.ai ul div:first-child li:nth-child(2){
    background: url('/public/icons/artificial-intelligence1.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.ai ul div:first-child li:nth-child(3){
    background: url('/public/icons/learning.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.ai ul div:first-child li:last-child{
    background: url('/public/icons/ai.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.ai ul div:nth-child(2) li:first-child{
    background: url('/public/icons/biometrics.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.ai ul div:nth-child(2) li:nth-child(2){
    background: url('/public/icons/analysis7.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.ai ul div:nth-child(2) li:nth-child(3){
    background: url('/public/icons/face-scan.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.ai ul div:nth-child(2) li:last-child{
    background: url('/public/icons/chat.svg');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>