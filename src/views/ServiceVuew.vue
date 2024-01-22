<script setup>
import DefaultHeaderView from '@/components/AllPages/Header/DefaultHeaderView.vue';
</script>

<template>
    <div class="Service">
        <DefaultHeaderView></DefaultHeaderView>
        <div class="videoback">
            <video muted loop autoplay plays-inline >
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

            <div class="buttons">
                <div class="button-1" id="btn-anim">Разработка сайтов</div>
                <div class="button-2" id="btn-anim">Реклама в СМИ</div>
                <div class="button-3" id="btn-anim">Разработка AI</div>
                <div class="button-4" id="btn-anim">CRM</div>
                <div class="button-5" id="btn-anim">Mobile apps</div>
            </div>
        </div>
    </div>
</template>


<style>

.services-center {
    background: url('../../public/bground/service.png');
    position: absolute;
    background-position: center;
    background-size: cover;
    width: 750px;
    height: 750px;
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

.buttons {
    display: flex;
    flex-direction: column;
    gap: 25px;
    top: 50%;
    left: -32%;
    transform: translateY(-50%);
    position: absolute;
    font-size: 14px;
    color: var(--Cyan, #82F7FF);
    text-align: center;
    justify-content: center;
}

#btn-anim {
    transition: 0.2s;
    cursor: pointer;
}

#btn-anim:hover {
    transform: scale(1.3) translateX(-10%);
}

.buttons .button-1{
    background: url('../../public/images/Vector1.png');
    width: 253.714px;
    height: 67.641px;
    flex-shrink: 0;
    margin-left: 29%;
    line-height: 67.641px;
}
.buttons .button-2{
    background: url('../../public/images/Vector2.svg');
    width: 221.956px;
    height: 67.641px;
    margin-left: 20%;
    flex-shrink: 0;
    line-height: 67.641px;
}
.buttons .button-3{
    background: url('../../public/images/Vector3.svg');
    width: 245.199px;
    height: 88.576px;
    flex-shrink: 0;
    line-height: 88.576px;
    margin-left: 2.5%;
}
.buttons .button-4{
    background: url('../../public/images/Vector4.svg');
    width: 222.895px;
    height: 67.641px;
    margin-left: 20%;
    flex-shrink: 0;
    line-height: 67.641px;
    
}
.buttons .button-5{
    background: url('../../public/images/Vector5.png');
    width: 258.034px;
    height: 67.641px;
    margin-left: 27%;
    flex-shrink: 0;
    line-height: 67.641px;
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