<script setup></script>



<template>
    <div class="history">
        <div class="his_univers">
            <video muted loop autoplay plays-inline>
                <source src="/public/video/earth.mp4">
            </video>
            <h3>История Universoft:</h3>
        </div>
        <div class="logistic">
<div class="first_left">
    <p>UNIVERSOFT IT специализируется на разработке и производстве <br>
         программных и программно-аппаратных комплексов в области ИТ и ИБ,<br>
         которые отвечают высочайшим мировым стандартам и нацелены<br>
          на развитие цифровых сервисов в Узбекистане.</p>
          <p style="padding-top: 480px;">Деятельность UNIVERSOFT IT направлена на импортозамещение в высокотехнологичной сфере.
             Компания фокусируется на создании новых для Узбекистана продуктов,
             которые вносят свой вклад в обеспечение технологического суверенитета страны.</p>
</div>
<div class="center_img">
    <img src="/public/bground/Group.svg" alt="">
</div>
<div class="second_right">
    <p>Компания развивает на территории Узбекистана высокотехнологичное производство
        продукции для обеспечения защиты государственных и корпоративных информационных систем
          на основе лучших мировых ИТ-практик и современных технологий в области ИБ.</p>
</div>
        </div>
    </div>
</template>


<style>
.history{
    background: #000;
    width: 100%;
    height: 250vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.5);
}
.his_univers{
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
}
.his_univers video{
width: 140px;
height: 140px;
}
.logistic{
    justify-content: space-around;
    display: flex;
    height: 1500px;
    text-align: right;
    position: relative;
}
.logistic img{
    width: 148px;
}
.first_left{
    width: 550px;
    font-size: 16px;
}
.first_left:first-child{
    padding: 190px 5px 0 0;
}
.first_left:last-child{
    padding-top: 200px;
}
.second_right{
    text-align: left;
    width: 550px;
    font-size: 16px;
    padding-top: 490px;
}
</style>