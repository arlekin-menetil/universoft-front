<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="ProcessAutomation">
        <div class="box"><h1>Вычислительная Техника</h1></div>
        <div class="text_ProcessAutomation">
            <p>Распространение продуктов и решений в области информационных технологий также лежит в основе нашего бизнеса. Мы сочетаем в себе широкий ассортимент различного спектра продуктов. Имеем возможность предоставить покупку по самым низким ценам ИТ-компонентов, а также готовые продукты, такие как серверы, системы хранения, настольные ПК, ноутбуки, сетевое оборудование, периферийные устройства и мобильные системы, в том числе и в области информационной и кибер безопасности.</p>
            <p>Мы работаем и у нас налажены партнерские отношения с такими компаниями как: АСБИС - одна из ведущих компаний IT-индустрии, входящая в международный холдинг ASBISC Enterprises PLC, компания Teltonika Telematics, Lenovo, Код Безопасности и многие другие.</p>
        </div>
    </div>
                <Footer />
</template>



<style>
.ProcessAutomation{
    width: 100%;
    height: 130vh;
    background: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 130px 50px 50px 50px;
}
.ProcessAutomation h1{
    text-align: center;
    color: rgba(255,255,255, 0.9);
    margin-bottom: 25px;
}
.ProcessAutomation p{
    margin-bottom: 35px;
    font-size: 17px;
    color: #fff;
    padding: 0 50px;
}
.ProcessAutomation span{
    color: #fff;
    font-weight: bold;
}
.text_ProcessAutomation{
width: 100%;
height: 100%;
}
</style>