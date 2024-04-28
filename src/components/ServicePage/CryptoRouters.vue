<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="crypto_routers">
        <div class="box"><h1>Крипто-Маршрутизаторы</h1></div>
        <div class="text_crypto_routers">
            <p>Семейство устройств, предназначенных для использования в корпоративных и государственных сетях связи, 
                в которых необходимо обеспечить шифрование передаваемого трафика в <span style="color:#82F7FF">соответствии с гарантированным классом защищенности.</span>
            </p>
            <ul style="display: flex;flex-direction: column;">
                <div style="display: flex; align-items: center;">
                    <img src="/public/icons/crypto/Рисунок5.png" alt="">
                    <img src="/public/icons/crypto/Рисунок6.png" alt="">
                </div>
                <div style="display: flex; flex-wrap: wrap;">
                <ol style="margin: 10px 25px 10px 0;">VPN с ГОСТ-алгоритмами до 40 Гбит/с</ol>
                <ol style="margin: 10px 25px 10px 0;">Межсетевой экран до 100 Гбит/с</ol>
                <ol style="margin: 10px 25px 10px 0;">Система предотвращения вторжений до 10 Гбит/с</ol>
                <ol style="margin: 10px 25px 10px 0;">Централизованное удаленное управление</ol>
                <ol style="margin: 10px 25px 10px 0;">Широкая линейка моделей</ol></div>
            </ul>
        </div><h2>Возможности:</h2>
        <ul>
            <div>
            <li><span style="color:#82F7FF;">Безопасность</span>
                <ol>•	Контроль сетевых приложений (4000 приложений)</ol>
                <ol>•	Блокировка доступа к вредоносным сайтам</ol>
                <ol>•	URL-фильтрация по категориям</ol>
                <ol>•	Фильтрация трафика по принадлежности IP-адреса к стране</ol>
                <ol>•	Поведенческий анализ на основе машинного обучения</ol>
            </li>
            <li><span style="color:#82F7FF;">Управление</span>
                <ol>•	Централизованное управление инфраструктурой из единой консоли</ol>
                <ol>•	Интеграция с LDAP</ol>
                <ol>•	Портал и агент аутентификации пользователей, SSO</ol>
                <ol>•	Гибкий интерфейс мониторинга</ol>
                <ol>•	Резервирование системы управления</ol>
            </li>
        </div>
        <div>
            <li><span style="color:#82F7FF;">Функционал</span>
                <ol>•	Многофункциональный узел безопасности (UTM)</ol>
                <ol>•	Высокопроизводительный межсетевой экран</ol>
                <ol>•	Система обнаружения вторжений (L2 IPS)</ol>
                <ol>•	Выделенная платформа управления</ol>
                <ol>•	SSL-инспектирование трафика</ol>
            </li>
            <li><span style="color:#82F7FF;">Сетевые технологии</span>
                <ol>•	Динамическая маршрутизация</ol>
                <ol>•	Поддержка NAT</ol>
                <ol>•	Multi-WAN</ol>
                <ol>•	QoS</ol>
                <ol>•	Поддержка VPN ГОСТ</ol>
                <ol>•	Кластеризация узлов безопасности</ol>
            </li>

        </div>
        </ul>
    </div>
    <Footer />
</template>

<style>
.crypto_routers{
    width: 100%;
    background: #000;
    padding: 150px;
}
.crypto_routers h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_crypto_routers{
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
.text_crypto_routers p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.crypto_routers ul{
    display: flex;
    font-size: 17px;
    justify-content: space-around;
}
.crypto_routers ul li{
    margin:50px 0 50px 0;
    height: 200px;
    padding-left: 40px;
    padding-top: 10px;
    width: 550px;
}
.crypto_routers ul div:first-child li:first-child{
    background: url('/public/icons/crypto/Рисунок1.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.crypto_routers ul div:first-child li:last-child{
    background: url('/public/icons/crypto/Рисунок2.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.crypto_routers ul div:nth-child(2) li:first-child{
    background: url('/public/icons/crypto/Рисунок3.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.crypto_routers ul div:nth-child(2) li:last-child{
    background: url('/public/icons/crypto/Рисунок4.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>