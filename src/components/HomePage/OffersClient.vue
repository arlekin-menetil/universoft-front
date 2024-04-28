<script setup></script>



<template>
    <div class="offers">
        <div class="videoback">
            <video muted loop autoplay plays-inline >
                <source src="/public/video/atom.mp4" />
              </video>
              <div class="text">
                <h2>Что мы предлагаем<br> нашим клиентам</h2>
               <p>Universoft-IT является ведущей компанией в области информационных технологий,<br> специализирующейся на разработке инновационного программного обеспечения</p>
            </div>
        </div>
        <div class="service">
                <div class="services"> 
                    <div> 
                        <a href="/Process_Automation">
                        <video muted loop autoplay plays-inline src="/public/video/SEO.webm"></video>
                        <h3>Автоматизация процессов <br>«Управления уязвимостями»</h3>
                        <p>Платформа содержит готовые модули и low-code  конструкторы для формирования облика системы при помощи настроек в web-интерфейсе.</p>
                    </a>
                    <a href="/Computer_Engineering">
                        <video muted loop autoplay plays-inline src="/public/video/AI.webm"></video>
                        <h3>Продажа <br> Вычислительной Техники</h3>
                        <p>Мы работаем в партнерских отношениях с такими компаниями как:
                            АСБИС - одна из ведущих компаний IT-индустрии,
                            входящая в международный холдинг ASBISC Enterprises PLC,
                            компания Teltonika Telematics, Lenovo, Код Безопасности и многие другие.</p>
                    </a>
                    </div>
                </div>
                <div class="all">
                    <a href="/service">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Все услуги</a>
                </div>
        </div>
        <img src="/public/bground/line.png" alt="">
    </div>
</template>


<style>
.all{
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
}
.all a{
    position: relative;
    width: 160px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.25em;
}
.all a span{
    position: absolute;
    width: 10px;
    height: 10px;
    transition: 0.5s;
}
.all a span:nth-child(1){
    top: -2px;
    left: -2px;
    border-bottom: 2px solid #82F7FF;
    border-right: 2px solid #82F7FF;
    transition-delay: 0s;
}
.all a span:nth-child(2){
    top: -2px;
    right: -2px;
    transform: rotate(90deg);
    border-bottom: 2px solid #82F7FF;
    border-right: 2px solid #82F7FF;
    transition-delay: 0.25s;
}
.all a span:nth-child(3){
    bottom: -2px;
    right: -2px;
    transform: rotate(180deg);
    border-bottom: 2px solid #82F7FF;
    border-right: 2px solid #82F7FF;
    transition-delay: 0.5s;
}
.all a span:nth-child(4){
    bottom: -2px;
    left: -2px;
    transform: rotate(270deg);
    border-bottom: 2px solid #82F7FF;
    border-right: 2px solid #82F7FF;
    transition-delay: 0.75s;
}
.all a:first-child:hover span:nth-child(1){
  top: 2px;  
  left: 2px;
  width: 100%;
  height: 100%;
  background: transparent;
  transition-delay: 0s;
}
.all a:first-child:hover span:nth-child(2){
    top: -9px;  
    right: -9px;
    background: transparent;
    transition-delay: 0s;
  }
  .all a:first-child:hover span:nth-child(3){
    bottom: 2px;  
    right: 2px;
    width: 100%;
    height: 100%;
    background: transparent;
    transition-delay: 0s;
  }
  .all a:first-child:hover span:nth-child(4){
    bottom: -9px;  
    left: -9px;
    background: transparent;
    transition-delay: 0s;
  }
.offers{
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: relative;
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
.services{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:500px ;
}
.services div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 800px;
    text-align: center;
}
.services div h3{
    color: rgba(255,255,255,0.7);
    font-weight: bold;
}
.services div p{
    font-size: 14px;
    color: rgba(255,255,255, 0.6);
    margin-top: 50px;
    padding: 0 15px;
}
.services div > a{
    position: relative;
    width: 446px;
    height: 534px;
    margin: 0 30px;
    border: 2px solid #82F7FF;
}
.services div > a:before{
    content: '';
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background: transparent;
    border: 2px solid #000;
    transition: 0.5s ease-in-out;
    transform: scaleY(1);
    transition-delay: 0.5s;
}
.services div > a:hover:before{
    transform: scaleY(0);
}
.services div > a:after{
    content: '';
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background: transparent;
    border: 2px solid #000;
    transition: 0.5s ease-in-out;
    transform: scaleX(1);
}
.services div > a:hover:after{
    transform: scaleX(0);
}
.services div a > video{
    width: 272px;
    height: 272px;
    overflow: hidden;
}
</style>