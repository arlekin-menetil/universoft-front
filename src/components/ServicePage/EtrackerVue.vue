<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="etracker">
        <div class="box"><h1>Etracker. Мониторинг ТС</h1></div>
        <div class="text_etracker">
            <p>Наша компания занимается разработкой программного обеспечения более 10 лет. 
                Наш продукт Etracker написан с нуля с использованием современных технологий. 
                А это значит, что мы можем гибко его настраивать, добавлять нужные функции, отчеты и другие возможности. 
                Наши сервера находятся на территории Республики Узбекистан. 
                Также есть возможность установки программного продукта Etracker на ваши сервера.</p>
        </div><h2>Возможности Системы:</h2>
        <ul>
            <div>
            <li>Контроль текущего местоположения автомобиля
                <ol>•	Выявление несанкционированных рейсов</ol>
                <ol>•	Соблюдение разрешенных маршрутов</ol>
                <ol>•	Локатор - возможность выборочного слежения за объектами без необходимости отдельной авторизации <br>в системе мониторинга </ol>
            </li>
            <li>Контроль расхода топлива с использованием датчика уровня топлива
                <ol>•	Учёт заправок/сливов топлива</ol>
                <ol>•	Выявление случаев повышенного расхода</ol>
                <ol>•	Определение фактических норм расхода топлива</ol>
            </li>
        </div>
        <div>
            <li>Контроль над соблюдением скоростного режима
                <ol>•	Отслеживание параметров движения</ol>
                <ol>•	Обеспечение безопасности грузопассажирских перевозок</ol>
            </li>
            <li>Отчетность и гео зоны
                <ol>•	Формирование любых отчетов для клиента</ol>
                <ol>•	Интеграция с 1с и любыми другими системами по просьбе клиента</ol>
                <ol>•	Работа с геозонами: формирования маршрута для конкретного авто, создание зоны пределов для поездок и др.</ol>
            </li>

        </div>
        </ul>
    </div>
    <Footer />
</template>

<style>
.etracker{
    width: 100%;
    background: #000;
    padding: 150px;
}
.etracker h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_etracker{
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
.text_etracker p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.etracker ul{
    display: flex;
    font-size: 17px;
    justify-content: space-around;
}
.etracker ul li{
    margin:50px 0 50px 0;
    height: 200px;
    padding-left: 40px;
    padding-top: 10px;
    width: 550px;
}
.etracker ul div:first-child li:first-child{
    background: url('/public/icons/etracker/Vector5.png');
    background-size: 70px;
    background-repeat: no-repeat;
    background-position: center left;
}
.etracker ul div:first-child li:last-child{
    background: url('/public/icons/etracker/7baaed2463bb385d5af694bdf0cde5a0.png');
    background-size: 70px;
    background-repeat: no-repeat;
    background-position: center left;
}
.etracker ul div:nth-child(2) li:first-child{
    background: url('/public/icons/etracker/3cd2ee77a6844636db4757f5f9f75c54.png');
    background-size: 70px;
    background-repeat: no-repeat;
    background-position: center left;
}
.etracker ul div:nth-child(2) li:last-child{
    background: url('/public/icons/etracker/2320360b0c0270b845ed77e29d294ac8.png');
    background-size: 70px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>