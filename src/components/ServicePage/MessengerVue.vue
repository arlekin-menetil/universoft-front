<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="messenger">
        <div class="box"><h1>Мессенджер Lochin</h1></div>
        <div class="text_messenger">
            <p>Lochin – это платформа корпоративных коммуникаций, созданная нашей компанией, в которой объединены классические функции мессенджера, видеоконференции и встроенные web-приложения для работы сотрудников в едином цифровом пространстве.</p>
            <p>Мы можем предложить защищенный корпоративный мессенджер с видеоконференциями на 120+ участников, обмен файлами, звонки, почтовый клиент, все корпоративные сервисы – в формате единого окна приложений Smart Apps.</p>
            <h2 style=" margin-top:40px; margin-bottom: 15px;">Преимущество Мессенджера</h2>
            <ul style="margin-top: 25px;">
                <div>
                <ol>Надежная замена WhatsApp, Skype, MS Teams и других решений.</ol>
                <ol>Личный кабинет сотрудника в формате единого окна <br>бизнес-приложений.</ol>
                <ol>Единое пространство для общения и работы.</ol>
                <ol>Эффективная и удобная работа в команде.</ol>
                <ol>Адаптация системы под ваши задачи.</ol>
                </div>
            <div>
                <ol>Федеративное управление и контроль за коммуникацией внутри и вне компании.</ol>
                <ol>Безопасный мессенджер с усиленной защитой данных.</ol>
                <ol>Защищенные On-Premise серверы и безопасность, подтвержденная сертификацией.</ol>
                <ol>Механизмы контейнеризации, защиты данных, контроля доступов пользователей и возможность запрета на экспорт данных</ol>
            </div>
            </ul>
        </div><h2>Возможности Мессенджера Lochin :</h2>
        <ul>
            <div>
            <li><span>Корпоративный мессенджер</span><br>Персональные и групповые чаты,<br>  обмен документами
            </li>
            <li><span>Аудиозвонки</span><br>One-to-one и групповые <br>аудиозвонки
                с коллегами и партнерами
                </li>
            <li><span>Видеоконференции</span><br>Видеоконференции до 128 активных<br>  участников
            </li>
            <li><span>Чат-боты</span><br>Платформа для написания <br>собственных ботов
            </li>
        </div>
        <div>
            <li><span>Безопасность данных</span><br>Сквозное (end-to-end) шифрование. <br>Безопасные пуш-нотификации, <br>без передачи в них контента. Шифрование ГОСТ
            </li>
            <li><span>Конфиденциальность</span><br>Открытие файлов строго в приложении. <br>Таймер автоматического удаления. <br>Запрет сохранения, пересылки, копирования.
            </li>
            <li><span>Криптоконтейнер</span><br>Зашифрованное хранение на мобильном. <br>
                 Дистанционное удаление данных. <br>Запрет скриншота, записи и копирования.
            </li></div>
        </ul>
    </div>
    <Footer />
</template>

<style>
.messenger{
    width: 100%;
    background: #000;
    padding: 150px;
}
.messenger h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_messenger{
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
.text_messenger p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.messenger ul{
    display: flex;
    font-size: 20px;
    justify-content: space-around;
}
.messenger ul li{
    margin:50px 0 50px 0;
    height: 100px;
    padding-left: 80px;
}
.messenger ul li span{
    color: #82F7FF;
}
.messenger ul ol{
    margin:50px 0 50px 0;
    height: 50px;
    padding-top: 10px;
    font-size: 15px;
    width: 500px;
}
.messenger ul:nth-child(2){
    display: flex;
    flex-direction: column;
}

.messenger ul div:first-child li:first-child{
    background: url('../../../public/icons/lochin/corp.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.messenger ul div:first-child li:nth-child(2){
    background: url('../../../public/icons/lochin/call.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.messenger ul div:first-child li:nth-child(3){
    background: url('../../../public/icons/lochin/Рисунок12.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.messenger ul div:first-child li:last-child{
    background: url('../../../public/icons/lochin/Рисунок13.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.messenger ul div:nth-child(2) li:first-child{
    background: url('../../../public/icons/lochin/Рисунок14.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.messenger ul div:nth-child(2) li:nth-child(2){
    background: url('../../../public/icons/lochin/Рисунок15.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.messenger ul div:nth-child(2) li:last-child{
    background: url('../../../public/icons/lochin/Рисунок16.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>