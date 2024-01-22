<script setup>
import {FormConsult} from '../../../assets/animation';
</script>

<template>
    <div class="ConsultForm">
        <div class="fullPageMenu" id="Consult">
            <div class="Consult">
              <div class="logo">
                <a href=""><img src="../../../../public/icons/button_universoft.svg" alt=""></a>
              </div>
              <div class="information">
              <div class="office">
                <h2>Наш офис</h2>
                <p>г,Ташкент улица Тараса Щевченко 22</p>
              </div>
              <div class="about_client">
                <h2>Наши клиенты</h2>
                <p>Вы можете познакомиться с нашими партнерами, которые нам доверяют и давно с нами работают</p>
              </div>
              <div class="what_think">
                <h2>Что думают наши клиенты</h2>
                <p>Отзывы наших клиентов о нас и нашей работе</p>
              </div>
            </div>
            <div class="icon_soc">
              <a href="">
                <img src="../../../../public/icons/yandex.svg" alt=""><p>Посмотреть <br> отзывы в Яндекс</p>
              </a>
              <a href="" class="look_soc"><img src="../../../../public/icons/google.svg" alt=""><p>Посмотреть<br> отзывы в Google</p></a>
            </div>
            </div>
            <div class="banner">
              <div class="videoback">
                <video muted loop autoplay plays-inline >
                    <source src="../../../../public/video/ConsutVideo.webm" />
                  </video>
            </div>
            </div>
          </div>
        <div class="consultate">
            <h1>Инновации с Universoft-IT ваш путь<br>
                к лидерству в цифровой эпохе.</h1>
                <p>Мы считаем, что лучше тратить больше времени на наших клиентов, чем на себя<br>
                    Тем не менее, пожалуйста, не стесняйтесь подать заявку</p>
                    <span @click="FormConsult()">Получить консультацию</span>
        </div>
          <span class="menuicon" id="toggle" @click="FormConsult()"></span>
    </div>
</template>

<style>
/*Consultate Form*/
.icon_soc{
  display: flex;
}
 .office .about_client .what_think .icon_soc{
  width: 100%;
}
.fullPageMenu{
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/public/video/ConsutVideo.webm');
    background-position: bottom right;
    transition: 1s;
    z-index: 100;
  }
  .fullPageMenu.active{
  top: 0;
  }
  .fullPageMenu .banner{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .Consult h2{
    color: #fff;
  }
  .Consult p{
    color: #717171;
  }
  .information{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
  }
.icon_soc{
  width: 378px;
  display: flex;
  justify-content: space-between;
}
.icon_soc a{
  width: 169px;
display: flex;
align-items: center;
justify-content: space-between;
}
.icon_soc a p{
  font-size: 14px;
}
.icon_soc a img{
  width: 49px;
  height: 49px;
}
  /*page_drop*/
  .fullPageMenu .Consult{
    display: flex;
    justify-content: space-around;
    align-items: left;
    width: 584px;
    height: 100%;
    overflow-y: auto;
    flex-direction: column;
    z-index: 10;
  }
  .Consult .information{
    height: 400px;
  }
  /*icon close*/
  .menuicon{
    position: fixed;
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    z-index: 200;
  }
  .menuicon.active{
    background: url("../../../../public/icons/close.svg");
    background-size: 36px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
  }
/*background*/
.fullPageMenu .videoback video{
    width:100%;
    height: 100vh;
    left:0;
    top: 0;
    z-index: -10;
    object-fit: cover;
    position: absolute;  
}
/*Text Consult*/
.consultate{
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 40%;
    left: 25%;
    right: 25%;
    text-align: center;
}
.consultate p{
margin-top: 31px;
}
.consultate span{
    color: #82F7FF;
    box-shadow: -2px 1px 15px 2px #82F7FF inset;
    padding: 26px 39px;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 44px;
  }
</style>