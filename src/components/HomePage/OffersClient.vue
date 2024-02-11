<script setup></script>



<template>
    <div class="offers">
        <div class="videoback">
            <video muted loop autoplay plays-inline >
                <source src="../../../public/video/earth.mp4" />
              </video>
              <div class="text">
                <h2>Что мы предлогаем<br> нашим клиентам</h2>
               <p>Universoft-IT является ведущей компанией в области информационных технологий,<br> специализирующейся на разработке инновационного программного обеспечения</p>
            </div>
        </div>
        <div class="service">
            <div class="our_service">
            <div class="smm">
                <video muted loop autoplay plays-inline>
                    <source src="../../../public/video/SMI.webm">
                </video>
                <h3>Реклама в СМИ</h3>
                <p>Предлагаем разнообразную рекламу на портале<br> Kun.uz - от публикации в Telegram до мероприятий</p>
            </div>
            <div class="Ai">
                <video muted loop autoplay plays-inline>
                    <source src="../../../public/video/AI.webm">
                </video>
                <h3>Разработка AI</h3>
                <p>ИИ обрабатывать большие объемы данных, выявлять закономерности идентифицировать информацию.</p>
            </div>
        </div>

        </div>
        <img src="../../../public/bground/line.png" alt="">
    </div>
</template>


<style>

.offers{
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}
.offers .videoback{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.offers img:last-child{
    width: 100%;
    height: 125px;;
}
.our_service{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.service h3{
    color: #fff;
    font-weight: bold;
}
.our_service div{
    width: 400px;
    height: 534px;
    padding-top: 50px;
    box-shadow: 0px -1px 31px -9px #82F7FF inset;
    margin: 0 15px;
    cursor: pointer;
}
.our_service video{
    width: 272px;
    height: 272px;
    margin-bottom: 28px;
}
.our_service h3{
    margin-bottom: 25px;
}

</style>