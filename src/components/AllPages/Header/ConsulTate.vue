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
                <p>Республика Узбекистан,<br> г. Ташкент, Яккасарайский район, ул. Бобура 77</p>
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
            <div class="information_form">
              <h2>Записаться<br>на Консультацию</h2>
              <div class="name">
                  <h3>Ваше имя</h3>
                  <input type="text" placeholder="Имя">
              </div>
              <div class="phone">
                  <h3>Номер телефона</h3>
                  <input type="tel" placeholder="+998 (__) ___-__-__">
              </div>
              <button>Отправить</button>
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
.consultate h1{
  color: #fff;
  font-weight: bold;
}
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
/*форма отправки*/
.information_form h1{
  margin-bottom: -60px;
  color: #fff;
  font-weight: bold;
}
.information_form p{
  margin-bottom: 20px;
  color: #8F8F8F;
}
.information_form  ul{
  margin-bottom: -70px;
  color: #8F8F8F;
}
.information_form input{
  width: 401px;
  height: 60px;
  margin-bottom: 30px;
  border: 1px solid #82F7FF;
  background: none;
  border-radius: 10px;
  padding-left: 20px;
  z-index: 1;
  color: #fff;
  margin-left: 25px;
}
input[type="file"]{
  display: none;
}
.information_form h3{
  margin-bottom: 8px;
  color: #fff;
  margin-left: 35px;
}
label{
  width: 456px;
  height: 40px;
  position: absolute;
  color: #8F8F8F;
  border: 1px solid #82F7FF;
  background: url(../../../public/icons/Frame.svg) no-repeat center right;
  background-position-x: 420px;
  padding-top:5px;
  padding-left: 20px;
  border-radius: 10px;
  margin-left: 35px;
}
.information_form{
  width: 452px;
  height: 594px;
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  background: rgba(22,168,211,0.15);
  backdrop-filter: blur(5px);
  box-shadow: 0px -1px 10px 2px rgba(130,247,255, 0.5) inset;
  margin-left: 75px;
}
.information_form h2{
  text-align: center;
  font-size: 25px;
  color: #82F7FF;
  font-weight: bold;
  margin-bottom: 46px;
}
.information_form button{
  position: relative;
  top: 70px;
  padding: 22px 0;
  font-size: 16px;
  width: 401px;
  color: #000;
  font-weight: bold;
  background: #82F7FF;
  border: none;
  border-radius: 15px;
  margin-left: 25px;
}
.name{
  margin-bottom: 25px;
}
</style>