<script setup></script>


<template>
    <div class="footer">
        <footer>
            <div class="footer_menu">
              <div>
              <div class="footer_category">
                <h3>О компании</h3>
              </div>
              <div>
                <p>Universoft-IT является ведущей компанией в области <br> 
                  информационных технологий, специализирующейся<br>
                   на разработке инновационного программного<br>
                    обеспечения и предоставлении широкого спектра<br>
                     услуг IT-консалтинга.</p>
              </div>
              <div class="footer_icons">
                <a href="#"><img src="../../../public/icons/youtube.png" alt=""></a>
                <a href="#"><img src="../../../public/icons/telegramm.png" alt=""></a>
                <a href="#"><img src="../../../public/icons/instagramm.png" alt=""></a>
              </div>
            </div>
              <div class="footer_category">
                <h3>Услуги</h3>
                <ul>
                  <li><a href="">Токены ЭЦП</a></li>
                  <li><a href="">Мессенджер</a></li>
                  <li><a href="">Криптомаршрутизаторы</a></li>
                  <li><a href="">IDS</a></li>
                  <li><a href="">Национальная ОС</a></li>
                  <li><a href="">SOC Центры</a></li>
                  <li><a href="">Антивирус</a></li>
                  <li><a href="">DLP система</a></li>
                </ul>
              </div>
              <div class="footer_category">        
                <h3>Полезные ссылки</h3>
                <ul>
                  <li><a href="">Автоматизаия процссов<br> Управление уязвимостями</a></li>
                  <li><a href="">Etracker Мониторинг ТС</a></li>
                  <li><a href="">Разработка Сложных систем</a></li>
                  <li><a href="">Продажа Вычслителных Техники</a></li>
                  <li><a href="">Разработка AI</a></li>
                  <li><a href="">Информационная платформа ИБиИТ</a></li>
                </ul>
              </div>
              <div class="footer_category">
                <h3>Контактные Данные</h3>
                <ul>
                  <li>Республика Узбекистан,<br>
                    г. Ташкент, Яккасарайский район, ул. Бобура 77</li>
                  <li><a href="">info@universoft.uz</a></li>
                  <li><a href="tel:+998997735295">+998 99 773 52 95</a></li>
                  <li>Пн. - Сб. 9:00 до 19:00</li>
                </ul>
              </div>
            </div>
            <div class="footer_copyright">
              <img src="../../../public/bground/Line_footer.svg" alt="">
              <p>Копирование материалов сайта разрешается с ссылкой на сайт. <br>
                В противном случае копирование преследуется по закону</p>
            </div>
          </footer>
    </div>
</template>

<style>
.footer{
  width: 100%;
  height: 600px;
  background: #000;
  display: flex;
  color: rgba(255, 255, 255, 0.6);
}
footer{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
footer img{
  width: 100%;
  height: 140px;
  margin-bottom: 60px;
}
.footer_menu{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.footer_category{
  width: 396px;
}
.footer_category:first-child{
  margin-bottom: -125px;
}
.footer_category h3{
  margin-bottom: 15px;
  color: #fff;
}
.footer_category li {
  margin-bottom: 10px;
  font-size: 13px;
}
.footer_category a{
  color: rgba(255,255,255, 0.15);
}
.footer_category a:hover{
  color: rgba(255,255,255);
}
.footer_icons{
  margin-top: 52px;
}
.footer_icons a{
  margin: 0 5px;
}
.footer_icons img{
  width: 40px;
  height: 40px;
}
.footer_category{
width: 174px;
height: 168px;
}
.footer_copyright{
  width: 100%;
  flex-direction: column;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255,255,255, 0.15);
  text-align: center;
}
.footer_copyright p{
  margin-top: -100px;
  margin-bottom: 25px;
}
</style>