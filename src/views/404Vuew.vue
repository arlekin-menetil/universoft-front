<script setup></script>



<template>
    <div class="Error">
        <div class="number">
            <img src="../../public/bground/4.svg" alt="">
            <video muted loop autoplay plays-inline >
                <source src="../../../../public/video/-9803-4c23-9e38-9541f3b10d25.mp4" />
              </video>
            <img src="../../public/bground/4.svg" alt="">
        </div>
        <p>Страница в разработке, скора она будет доступна!</p>
        <a href="/">Вернуться Назад</a>
    </div>
</template>


<style>
.Error{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #000;
    color: #fff;
}
.Error p{
    font-weight: bold;
    font-size: 18px;
}
.number {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
}
.number video{
    width: 400px;
    height: 400px;
    overflow-x: hidden;
}
.Error a{
    color: #82F7FF;
    box-shadow: -2px 1px 15px 2px #82F7FF inset;
    padding: 26px 39px;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 44px;
  }
</style>
