<script setup></script>


<template>
    <div class="about">
    <div class="videoback">
          <div class="text">
            <h1>О компании:</h1>
           <center><p>Universoft-IT является ведущей компанией в области информационных технологий, специализирующейся на разработке инновационного программного обеспечения и предоставлении широкого спектра услуг IT-консалтинга. Мы являемся надежным и непрерывно растущим партнером для клиентов во всем мире.</p></center>
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
    height: 40vh;
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
}
.text p{
    margin-top: 50px;
    font-size: 22px;
    width: 75%;
}
</style>