<script setup>

function reset() {
    let name = document.getElementById("name")
    let phone = document.getElementById("phone")
    let sms = document.getElementById("sms")

    if (name.value != "" && phone.value != "" && sms.value != "") {
        name.value = ""
        phone.value = ""
        sms.value = ""
    }
}

</script>


<template>
    <div class="form">
        <div class="text">
            <h1>Наш адрес</h1>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27763.617126757857!2d69.22885644003583!3d41.25958986301304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a991b500001%3A0x96c481676b0cf361!2sSource%20to%20pay!5e0!3m2!1sen!2s!4v1707204578747!5m2!1sen!2s"
                    width="500" height="340" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <br />
                <h4>
                    Юридический адрес: 100029, Республика Узбекистан,<br>
                    город. Ташкент,
                    Мирабадский район,
                    ул. Буюк Турон 75/124.
                </h4>
                <h4>Почта: info@universoft.uz</h4>
                <h4>Режим работы: Пн. - Сб. 9:00 до 19:00</h4>
            </div>
        </div>
        <div class="information_form">
            <h3>Заполните форму для обратного связи!</h3>
            <div class="name">
                <h3>Ваше имя</h3>
                <input type="text" id="name" placeholder="Имя">
            </div>
            <div class="phone">
                <h3>Номер телефона</h3>
                <input type="tel" id="phone" name="phone" placeholder="+998 (__) ___-__-__" />
            </div>
            <div class="resume">
                <h3>Сообщение</h3>
                <textarea type="text" id="sms" placeholder="Text"></textarea>
            </div>
            <button @click="reset">Отправить</button>
        </div>
    </div>
</template>

<style>
.form {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 100px;
}

/*text info*/
.text h1 {
    color: #fff;
    font-weight: bold;
}

.text ul {
    margin-bottom: -70px;
    color: #8F8F8F;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 520px;
}

.form input {
    width: 456px;
    height: 40px;
    margin-bottom: 30px;
    border: 1px solid #82F7FF;
    background: none;
    border-radius: 10px;
    padding-left: 20px;
    z-index: 1;
    color: #fff;
}

.form textarea {
    border: 1px solid #82F7FF;
    background: none;
    border-radius: 10px;
    margin-bottom: 30px;
    padding-left: 20px;
    padding-top: 10px;
    color: #fff;
    height: 80px;
    width: 456px;
    resize: none;
}

input[type="file"] {
    display: none;
}

.form h3 {
    margin-bottom: 8px;
    color: #fff;
}

label {
    width: 456px;
    height: 40px;
    position: absolute;
    color: #8F8F8F;
    border: 1px solid #82F7FF;
    padding-top: 5px;
    padding-left: 20px;
    border-radius: 10px;
}

.information_form {
    width: 529px;
    height: 520px;
    display: flex;
    flex-direction: column;
    padding-top: 22px;
    background: rgba(22, 168, 211, 0.15);
    backdrop-filter: blur(5px);
    box-shadow: 0px -1px 10px 2px rgba(130, 247, 255, 0.5) inset;
    flex-wrap: wrap;
    align-content: center;
}

.information_form h2 {
    text-align: center;
    font-size: 25px;
    color: #82F7FF;
    font-weight: bold;
}

.information_form button {
    position: relative;
    padding: 22px 0;
    font-size: 16px;
    width: 456px;
    color: #000;
    font-weight: bold;
    background: #82F7FF;
    border: none;
    border-radius: 15px;
    cursor: pointer;
}
</style>