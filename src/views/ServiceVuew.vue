<script setup>
import DefaultHeaderView from '@/components/AllPages/Header/DefaultHeaderView.vue';
import Footer from '@/components/AllPages/FooterAllPs.vue'
</script>

<template>
    <div class="Service">
        <DefaultHeaderView></DefaultHeaderView>
        <div class="videoback">
            <video muted loop autoplay plays-inline>
                <source src="../../public/video/3Back.mp4" />
              </video>
        </div>
        <div class="services-center">
            <video muted loop autoplay plays-inline class="video-icon" width="115px" height="115px">
                <source src="../../public/video/3d-react.mp4" />
            </video>
            <div class="title">
                Что мы предлогаем нашим клиентам
            </div>
            <div class="subtitle">
                "ИТ решения, которые преобразуют ваш бизнес: наши предложения для клиентов, нацеленные на рост и эффективность."
            </div>

            <div class="buttons-left">
                <div class="button-1">Токены ЭЦП</div>
                <div class="button-2">Мессенджер</div>
                <div class="button-3">Криптомаршрутизаторы</div>
                <div class="button-4">Операционная система</div>
                <div class="button-5">SOC центр</div>
            </div>
            <div class="buttons-right">
                <div class="button-6" ><div class="text-right">Антивирус</div></div>
                <div class="button-7" ><div class="text-right">DLP система</div></div>
                <div class="button-8" ><div class="text-right">Etracker. Мониторинг ТС</div></div>
                <div class="button-9" ><div class="text-right">Разработка AI</div></div>
                <div class="button-10" ><div class="text-right">Разработка сложных систем</div></div>
            </div>
        </div>
    </div>
    <Footer />
</template>


<style>

.services-center {
    background: url('../../public/bground/service.png');
    position: absolute;
    background-position: center;
    background-size: cover;
    width: 750px;
    height: 600px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.services-center .video-icon{
    position: relative;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.services-center .title {
    position: relative;
    top: 34%;
    left: 50%;
    line-height: 45px;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 32px;
    width: 462px;
    color: #fff;
}
.services-center .subtitle {
    position: relative;
    top: 34%;
    left: 50%;
    font-size: 14px;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 360px;
    color: #EBEBEB;
}

.buttons-left {
    display: flex;
    flex-direction: column;
    gap: 25px;
    top: 50%;
    left: -32%;
    transform: translateY(-50%);
    position: absolute;
    font-size: 13px;
    color: var(--Cyan, #82F7FF);
    text-align: center;
    justify-content: center;
}

.buttons-right {
    display: flex;
    flex-direction: column;
    gap: 25px;
    top: 50%;
    left: 98%;
    transform: translateY(-50%);
    position: absolute;
    font-size: 13px;
    color: var(--Cyan, #82F7FF);
    text-align: center;
    justify-content: center;
}


.buttons-left .button-1{
    background: url('../../public/images/Vector1.png');
    width: 253.714px;
    height: 67.641px;
    flex-shrink: 0;
    margin-left: 29%;
    line-height: 67.641px;
}
.buttons-left .button-2{
    background: url('../../public/images/Vector2.svg');
    width: 221.956px;
    height: 67.641px;
    margin-left: 20%;
    flex-shrink: 0;
    line-height: 67.641px;
}
.buttons-left .button-3{
    background: url('../../public/images/Vector3.svg');
    width: 245.199px;
    height: 88.576px;
    flex-shrink: 0;
    line-height: 88.576px;
    margin-left: 2.5%;
}
.buttons-left .button-4{
    background: url('../../public/images/Vector4.svg');
    width: 222.895px;
    height: 67.641px;
    margin-left: 20%;
    flex-shrink: 0;
    line-height: 67.641px;
    
}
.buttons-left .button-5{
    background: url('../../public/images/Vector5.png');
    width: 258.034px;
    height: 67.641px;
    margin-left: 27%;
    flex-shrink: 0;
    line-height: 67.641px;
}

.buttons-right .button-6{
    background: url('../../public/images/Vector1.png');
    width: 253.714px;
    height: 67.641px;
    flex-shrink: 0;
    margin-left: -27%;
    line-height: 67.641px;
    transform: rotateY(180deg);
}
.buttons-right .button-7{
    background: url('../../public/images/Vector2.svg');
    width: 221.956px;
    height: 67.641px;
    margin-left: -6%;
    flex-shrink: 0;
    line-height: 67.641px;
    transform: rotateY(180deg);

}
.buttons-right .button-8{
    background: url('../../public/images/Vector3.svg');
    width: 245.199px;
    height: 88.576px;
    flex-shrink: 0;
    line-height: 88.576px;
    margin-left: 2%;
    transform: rotateY(180deg);

}
.buttons-right .button-9{
    background: url('../../public/images/Vector4.svg');
    width: 222.895px;
    height: 67.641px;
    margin-left: -7%;
    flex-shrink: 0;
    line-height: 67.641px;
    transform: rotateY(180deg);
    
}
.buttons-right .button-10{
    background: url('../../public/images/Vector5.png');
    width: 258.034px;
    height: 67.641px;
    margin-left: -27%;
    flex-shrink: 0;
    line-height: 67.641px;
    transform: rotateY(180deg);
}

.text-right {
    transform: rotateY(180deg);
}

.videoback{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
}
/*background*/
.Service .videoback video{
    width:100%;
    height: 100vh;
    left:0;
    top: 0;
    z-index: -1;
    object-fit: cover;
    position: absolute;  
}

</style>