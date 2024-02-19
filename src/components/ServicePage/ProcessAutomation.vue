<script setup>
import Header from '../../components/AllPages/Header/NavMenu.vue'
import Footer from '../../components/AllPages/FooterVuew.vue'
</script>


<template>
    <Header />
    <div class="ProcessAutomation">
        <div class="box"><h1>Автоматизация процессов «Управления уязвимостями»</h1></div>
        <div class="text_ProcessAutomation">
            <p>Платформа содержит готовые модули и low-code  конструкторы для формирования облика системы при помощи настроек в web-интерфейсе.
                 </p>
            <p>При помощи различных решений автоматизируются как вопросы технического обеспечения кибербезопасности, так и стратегические вопросы управления соответствием различным нормативным документам, включая собственные методики.</p>
            <p><span>Информационная платформа ИБ и ИТ</span><br>Платформа позволяет гибко встроить обработку инцидентов ИБ, интегрироваться с любыми системами для автоматизации действий и минимизировать трудозатраты и возможный ущерб.</p>
                <p>Так же обеспечивает сетевое сканирование и сбор информации об обнаруженных ИТ-активах. Поддерживает без агентский механизм глубокой инвентаризации, а так же сбор  и агрегацию информации об активах из существующих в организации СЗИ и ИТ-систем.</p>
                <p><span>Модуль управления непрерывностью деятельности.</span><br>Обеспечивает сбор и анализ данных об угрозах кибербезопасности, обогащения, информации, точную идентификацию, расследования и реагирование на обнаруженные угрозы в целях защиты ИТ-инфраструктуры организации.   </p>
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