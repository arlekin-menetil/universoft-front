<script setup>
import DefaultHeaderView from '@/components/AllPages/Header/DefaultHeaderView.vue';
</script>

<template>
    <div class="Partners">
        <DefaultHeaderView></DefaultHeaderView>
        <div class="videoback">
            <video muted loop autoplay plays-inline >
                <source src="../../public/video/3Back.mp4" />
            </video>
        </div>
        
        <div class="contents">
            <div class="title">Наши партнёры</div>
            <div class="subtitle">Сотрудничество и доверие: кто рядом с нами</div>
        </div>

        <div class="card-box">
            <div class="cards" id="card1">Uzguard</div>
            <div class="cards" id="card2">Xalq Bank</div>
            <div class="cards" id="card3">AKFA</div>
            <div class="cards" id="card4">HILST</div>
            <div class="cards" id="card5">Davr Bank</div>
        </div>

    </div>
</template>


<style>

.card-box {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    gap: 50px;
    text-align: center;
    line-height: 257px;
    color: var(--Cyan, #82F7FF);
    font-size: 30px;
}

.card-box .cards {
    width: 291.56px;
    height: 257.78px;
    background: linear-gradient(120deg, rgba(22, 168, 211, 0.28) 19%, rgba(87, 223, 253, 0.349) 25%, rgba(22, 168, 211, 0.28) 33%);
    border-style: solid;
    border-width: 0.5px;
    border-color: var(--Cyan, #82F7FF);    opacity: 0.9;
    backdrop-filter: blur(5px);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 3s shine linear infinite;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0px 0px 21px 0px rgba(130, 247, 255, 0.25) inset;
    transition: 0.7s;
    cursor: pointer;
}


@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

.contents {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.title {
    color: var(--Cyan, #82F7FF);
    font-size: 18px;
    font-weight: 500;
}

.subtitle {
    width: 518px;
    font-size: 25px;
    font-weight: 500;
    color: #fff;
    margin-top: 10px;
}

.videoback{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
}
/*background*/
.Partners .videoback video{
    width:100%;
    height: 100vh;
    left:0;
    top: 0;
    z-index: -1;
    object-fit: cover;
    position: absolute;  
}

</style>