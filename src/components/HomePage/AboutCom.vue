<script setup></script>


<template>
    <div class="about">
    <div class="videoback">
        <video muted loop autoplay plays-inline >
            <source src="../../../public/video/earth.mp4" />
          </video>
          <div class="text">
            <h2>О компании</h2>
           <p>Universoft-IT является ведущей компанией в области информационных технологий, специализирующейся на разработке инновационного программного обеспечения<br> и предоставлении широкого спектра услуг IT-консалтинга. Мы являемся надежным и непрерывно растущим партнером для клиентов во всем мире.</p>
        </div>
    </div>
    </div>
</template>



<style>
.about{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
}
.about .videoback{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000 url('../../../public/bground/grid.svg') no-repeat right bottom;
}
.videoback video{
    width: 140px;
    height: 140px;
}
.text{
    color: #fff;
    margin-top: 50px;
    margin-bottom: 50px;
}
.text p{
    margin-top: 90px;
}
</style>