<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="dlp">
        <div class="box"><h1>DLP система</h1></div>
        <div class="text_dlp">
            <p>Система предотвращения утечек данных(Data Leak Prevention) <br>                
                Система мониторинга перемещения корпоративных данных и блокировки файлов с конфиденциальной информацией в соответствии с политиками компании
            </p>
        </div>
        <ul>
            <div>
                <img style="width: 600px;" src="/public/icons/dlp/Рисунок5.png"/>
                <img style="margin-left: 600px;" src="/public/icons/dlp/Рисунок1.png"/>
        </div>
        </ul>
        <h2 style="margin: 25px 0 25px 0;">Возмоности системы:</h2>
        <ul>
            <li>Защита от утечек  данных по вине  сотрудников
            </li>
            <li>Контроль работы  сотрудников
                на компьютерах
                </li>
            <li>Анализ поведения  сотрудника (UBA)
            </li>
        </ul>
    </div>
    <Footer />
</template>

<style>
.dlp{
    width: 100%;
    background: #000;
    padding: 150px;
}
.dlp h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.text_dlp{
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
.text_dlp p:first-child{
    margin-bottom: 42px;
}
h2{
    color: rgba(255,255,255, 0.9);
    font-size: 25px;
    text-align: center;
}
.dlp ul{
    display: flex;
    font-size: 20px;
    justify-content: space-around;
}
.dlp ul li{
    margin:50px 15px 50px 0;
    height: 50px;
    padding-left: 60px;
    color: #82F7FF;
}
.dlp ul li:first-child{
    background: url('/public/icons/dlp/Рисунок2.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.dlp ul li:nth-child(2){
    background: url('/public/icons/dlp/Рисунок3.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
.dlp ul li:last-child{
    background: url('/public/icons/dlp/Рисунок4.png');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center left;
}
</style>