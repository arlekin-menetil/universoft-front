<script setup></script>



<template>
    <div class="history">
        <div class="his_univers">
            <video muted loop autoplay plays-inline>
                <source src="../../../public/video/earth.mp4">
            </video>
            <h3>История Universoft: Преодоление милейших <br>моментов.</h3>
        </div>
        <div class="logistic">
            <div>
                <p> В начале 2000-х несколько студентов технического университета<br>
                      объединились, чтобы решить сложную задачу по созданию<br>
                      программного обеспечения для автоматизации управления<br>
                      складами. Так началась история Univesfoft - с маленькой команды,<br>
                      работающей из подвала одного из учебных корпусов.</p>
                <p>После года разработки первый продукт был готов. Это была система управления запасами, которая стала хитом среди небольших логистических компаний. Этот успех вдохновил основателей на дальнейшее развитие.</p>
            </div>
            <div><img src="../../../public/bground/Group.png" alt=""></div>
            <div><p>После года разработки первый продукт был готов. Это была система управления запасами, которая стала хитом среди небольших логистических компаний. Этот успех вдохновил основателей на дальнейшее развитие.</p></div>
        </div>
    </div>
</template>


<style>
.history{
    background: #000;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
}
.his_univers{
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.his_univers video{
width: 140px;
height: 140px;
}
.logistic{
    display: flex;
    height: 1000px;
    text-align: right;
}
.logistic:first-child{
    width: 400px;
}
.logistic img{
    width: 148px;
}
</style>