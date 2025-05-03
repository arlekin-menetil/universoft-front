<script setup></script>

<template>
    <div class="form">
        <div class="text-form">
            <h1>Отправить резюме</h1>
            <p>Поскольку вы работаете с одной из лучшей IT-компаний,<br> 
                мы рекомендуем вам следовать следующим рекомендациям:</p>
                <p>Заполните форму; <br> Приложите резюме во вложение;<br>  Отправить нам документы:</p>
                <ul>
                <li style="margin-bottom: 15px;">По следующим вакансиям:</li> 
                <li>Фронтенд (ReactJS)</li>
                <li>Бэкэнд (PHP)</li>
                <li>UI/UX дизайнер</li>
                <li>Менеджер проекта (PM)</li>
                <li>Мобильный разработчик (React)</li>
            </ul>
                <p>Мы приветствуем и будем рады каждого кандидату, <br>претендующего на наши
                    вакансии. <br>
                     Присоединяйтесь к нам и нашему дружному
                    коллективу, <br>который гарантирует личностное развитие и достойную
                    уверенность в завтрашнем дне!</p>
        </div>
     <div class="information_form">
        <h2>Заполните форму</h2>
        <div class="name">
            <h3>Ваше имя</h3>
            <input type="text" placeholder="Имя">
        </div>
        <div class="phone">
            <h3>Номер телефона</h3>
            <input type="tel" placeholder="+998 (__) ___-__-__">
        </div>     
        <div class="resume">
            <h3>Резюме</h3>
            <input type="file" id="file">
            <label for="file">Выберите файл</label>
        </div>
        <button>Отправить</button>
        </div>
    </div>
</template>

<style>
.form{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 150px;
}
.text-form{
    height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/*text info*/
.text-form h1{
    color: #fff;
    font-weight: bold;
}
.text-form p{
    margin-bottom: 10px;
    color: #8F8F8F;
}
.text-form ul{
    color: #8F8F8F;
}
.form input{
    width: 456px;
    height: 40px;
    margin-bottom: 30px;
    border: 1px solid #82F7FF;
    background: none;
    border-radius: 10px;
    padding-left: 20px;
    z-index: 1;
    color: #fff;
    margin-left: 35px;
}
input[type="file"]{
    display: none;
}
.form h3{
    margin-bottom: 8px;
    color: #fff;
    margin-left: 35px;
}
label{
    width: 456px;
    height: 40px;
    position: absolute;
    color: #8F8F8F;
    border: 1px solid #82F7FF;
    background: url(../../../public/icons/Frame.svg) no-repeat center right;
    background-position-x: 420px;
    padding-top:5px;
    padding-left: 20px;
    border-radius: 10px;
    margin-left: 35px;
}
.information_form{
    width: 529px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-top: 22px;
    background: rgba(22,168,211,0.15);
    backdrop-filter: blur(5px);
    box-shadow: 0px -1px 10px 2px rgba(130,247,255, 0.5) inset;
}
.information_form h2{
    text-align: center;
    font-size: 25px;
    color: #82F7FF;
    font-weight: bold;
}
.information_form button{
    position: relative;
    top: 90px;
    padding: 22px 0;
    font-size: 16px;
    width: 500px;
    color: #000;
    font-weight: bold;
    background: #82F7FF;
    border: none;
    border-radius: 15px;
    margin-left: 15px;
}
</style>