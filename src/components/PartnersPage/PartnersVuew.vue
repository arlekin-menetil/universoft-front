<script setup>
</script>

<template>
<div class="wrappe">
        <div class="box">
        <div class="carusel">
            <span style="--i:1;">
                <a href="#"><img src="../../../public/carusel/Davlocal.png" alt=""></a>
            </span>
            <span style="--i:2;">
                <a href="#"><img src="../../../public/carusel/Uzguard.png" alt=""></a>
            </span>
            <span style="--i:3;">
                <a href="#"><img src="../../../public/carusel/Davlocal.png" alt=""></a>
            </span>
            <span style="--i:4;">
                <a href="#"><img src="../../../public/carusel/Uzguard.png" alt=""></a>
            </span>
            <span style="--i:5;">
                <a href="#"><img src="../../../public/carusel/Uzguard.png" alt=""></a>
            </span>
            <span style="--i:6;">
                <a href="#"><img src="../../../public/carusel/Davlocal.png" alt=""></a>
            </span>
            <span style="--i:7;">
                <a href="#"><img src="../../../public/carusel/Uzguard.png" alt=""></a>
            </span>
            <span style="--i:7;">
                <a href="#"><img src="../../../public/carusel/Uzguard.png" alt=""></a>
            </span>
        </div>
    </div>
    <div class="text_partners">
        <div class="info_partners">
        <img src="../../public/carusel/Наши_партнёры.svg" alt="">
        <img src="../../public/carusel/Сотрудничество.svg" alt="">
    </div>
    </div>
</div>
</template>


<style>
.box{
     width:100%;
     height:100vh;
     display: flex;
     justify-content: center;
     align-items:center;
  }
  .text_partners{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
  }
    .info_partners{
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
        align-items:center;
      }
    .bg{
            display:flex;
            flex-direction:column;
            justify-content:center;
            text-align:center;
            align-items:center;
          }
    .bg img{
      width: 822px;
      margin-top: 77px;
    }
    .line_bg {
      position: absolute;
      bottom: 3px;
    }
.carusel{
   position: relative;
   width: 291px;
   height: 257px;
   transform-style: preserve-3d;
}
.carusel{
    animation: animate 45s linear infinite;
}
@keyframes animate{
    0%{
        transform: perspective(1000px) rotateY(0deg);
    }
    100%{
        transform: perspective(1000px) rotateY(360deg);
    }
}
.carusel span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px); 
}
.carusel span img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.info_partners:first-child{
    margin-bottom: 10px;
}
.bg:first-child{
    width: 1000px;
    height: 55px;
}
@import url("../assets/main.css");
</style>