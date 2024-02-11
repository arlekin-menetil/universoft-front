<script setup></script>



<template>
    <div class="formContact">
        <div class="contactUs">
            <div class="title">
                <h2>Связаться с нами</h2>
            </div>
            <div class="box">
                <div class="contact form">
                    <h3>Мы ответим на ваши вопросы</h3>
                    <form>
                        <div class="formBox">
                            <div class="row50">
                                <div class="inputBox">
                                    <span>Фамилия</span>
                                    <input type="text" placeholder="">
                                </div>
                            <div class="inputBox">
                                    <span>Имя</span>
                                    <input type="text" placeholder="">
                                </div>
                            </div>
                            <div class="row50">
                                <div class="inputBox">
                                    <span>Email</span>
                                    <input type="text" placeholder="">
                                </div>
                            <div class="inputBox">
                                    <span>Номер телефона</span>
                                    <input type="text" placeholder="+998 (9_)-___-__-__">
                                </div>
                            </div>
                            <div class="row100">
                                <div class="inputBox">
                                    <span></span>
                                    <textarea placeholder="Введите текст"></textarea>
                                </div>
                                </div>
                        <div class="row100">
                            <div class="inputBox">
                                <input type="submit" value="Отправить">
                            </div>
                            </div>
                            </div>
                    </form>
                </div>

                <div class="contact info">
                    <h3>Контактные данные</h3>
                    <div class="infoBox">
                        <div>
                        <span><img src="../../../../public/icons/location_3936499-removebg-preview.png" ></span>
                        <p>Республика Узбекистан,<br> г. Ташкент, Яккасарайский район, ул. Бобура 77
                          </p>
                            </div>
                    <div>
                        <span><img src="../../../../public/icons/mails_3936728-removebg-preview.png"></span>
                        <a href="mailto: info@universoftit.uz">info@universoftit.uz</a>
                            </div>
                    <div>
                        <span><img src="../../../../public/icons/call_4160991-removebg-preview.png"></span>
                        <a href="tel:+998997725295">+998 99 772 52 95</a>
                    </div>
                    <ul class="sci">
                        <li><a href="#"><img src="../../../public/icons/instagramm.png" alt=""></a></li>
                        <li><a href="#"><img src="../../../public/icons/telegramm.png" alt=""></a></li>
                        <li><a href="#"><img src="../../../public/icons/youtube.png" alt=""></a></li>
                    </ul>
                </div>
                </div>
                <div class="contact map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.719859763718!2d69.25793967519907!3d41.27143510318073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a991ceeacd3%3A0x1b10976c1d6c00f4!2z0YPQu9C40YbQsCDQkdC-0LHRg9GA0LAgNzcsINCi0LDRiNC60LXQvdGCLCBUb3Noa2VudCBTaGFocmksINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707493459927!5m2!1sru!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.formContact{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
}
.contactUs{
    position: relative;
    width: 100%;
    padding: 40px 100px;
}
.contactUs .title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    padding-top: 50px;
}
.contactUs .title h2{
    color: #fff;
    font-weight: 500;
    margin-bottom: 20px;
}
.form{
    grid-area: form;
}
.info{
    grid-area: info;
}
.map{
    grid-area: map;
}
.box{
    position: relative;
}
.contact{
padding: 25px;
background: rgba(22,168,211,0.15);
backdrop-filter: blur(5px);
box-shadow: 0px -1px 10px 2px rgba(130,247,255, 0.5) inset;
}
.box{
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 5fr 4fr;
    grid-template-areas: 
    "form info"
    "form map";
    grid-gap: 20px;
}
.contact h3{
    color: #fff;
    font-weight: 500;
    font-size: 1.4em;
    margin-bottom: 10px;
}
/*form style*/
.formBox{
position: relative;
width: 100%;
}
.formBox .row50{
display: flex;
gap: 20px;
}
.inputBox{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 50%;
}
.formBox .row100 .inputBox{
width: 100%;
}
.inputBox span{
    color: rgba(0,255,255,0.5);
    margin-bottom: 5px;
    margin-top: 10px;
    font-weight: 500;
}
.inputBox input{
    padding: 10px;
    font-size: 1.1em;
    outline: none;
    border: 1px solid #333;
    background: none;
    color: #fff;
}
.inputBox textarea{
    padding: 10px;
    font-size: 1.1em;
    outline: none;
    border: 1px solid #333;
    resize: none;
    min-height: 250px;
    margin-bottom: 30px;
    background: none;
    color: #fff;
}
.inputBox input[type="submit"]{
    background: #82F7FF;
    color: rgba(255,255,255, 0.9);
    border: none;
    border-radius: 20px;
    font-size: 1.1em;
    max-width: 120px;
    font-weight: 500;
    cursor: pointer;
    padding: 14px 15px;
}
.inputBox ::placeholder{
    color: #999;
}

/*adress*/
.infoBox div{
    display: flex;
    margin-bottom: 15px;
}
.infoBox div span{
    min-width: 40px;
    color: #333;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    border-radius: 50%;
     margin-right: 15px;
}
.infoBox div h3{
    font-size: 18px;
} 
.infoBox div a{
    color: #333;
    font-size: 18px;
}
.infoBox div a:hover{
    color: #fff;
}
.infoBox span > img{
    width: 30px;
    height: 30px;
}
.infoBox img{
    width: 100%;
    height: 100%;
}
.sci{
    display: flex;
}
.sci img{
    width: 50px;
    height: 50px;
    margin: 25px 5px 0 5px;
}
/*карта*/
.map{
    padding: 0;
}
</style>