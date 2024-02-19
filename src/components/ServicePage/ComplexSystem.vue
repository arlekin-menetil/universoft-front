<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="Complex_system">
        <div class="box"><h1>Разработка сложных систем</h1></div>
        <div class="text_Complex_system">
            <p>Сотрудниками компании под заказ разрабатываются высоконагруженные сервисы и сложные информационные системы с детальной проработкой всех элементов системы. Наши специалисты готовят полную документацию по проекту. Подробно описывая функционал и программный код.</p>
        </div><h2>Коротко, что включает в себя Разработка СС:</h2>
        <ul>
            <div>
            <li>Интерфейс для клиентов</li>
            <li>Панель управления для Администраторов</li>
            <li>Закрытый интерфейс для сотрудников<br> компании</li>
            <li>Выполнение сложных задач системой</li>
        </div>
        <div>
            <li>Разработка алгоритма выполнения</li>
            <li>Ядро системы</li>
            <li>Серверная часть системы</li>
            <li>И другие задачи по заказу и пожеланиям клиентов</li></div>
        </ul>
    </div>
    <Footer />
</template>

<style>
.Complex_system{
    width: 100%;
    background: #000;
    padding: 150px;
}
.Complex_system h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_Complex_system{
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
.text_Complex_system p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.Complex_system ul{
    display: flex;
    font-size: 20px;
    justify-content: space-around;
}
.Complex_system ul li{
    margin:50px 0 50px 0;
    height: 50px;
    padding-left: 60px;
    padding-top: 10px;
}
.Complex_system ul div:first-child li:first-child{
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Complex_system ul div:first-child li:nth-child(2){
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Complex_system ul div:first-child li:nth-child(3){
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Complex_system ul div:first-child li:last-child{
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Complex_system ul div:nth-child(2) li:first-child{
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Complex_system ul div:nth-child(2) li:nth-child(2){
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Complex_system ul div:nth-child(2) li:nth-child(3){
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.Complex_system ul div:nth-child(2) li:last-child{
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>