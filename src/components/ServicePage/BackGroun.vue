<script setup></script>



<template>
    <div class="background">
        <div class="baloon">
            <img src="../../../public/bground/dashed.svg" alt="">
            <img src="../../../public/bground/Group39500.svg" alt="">
            <img src="../../../public/bground/1.svg" alt="">
            <img src="../../../public/bground/Group39506.svg" alt="">
            <img src="../../../public/bground/Vector.svg" alt="">
            <img src="../../../public/bground/Vector_2.svg" alt="">
            <img src="../../../public/bground/Group39507.png" alt="">
            <img src="../../../public/bground/Group39508.png" alt="">
        </div>
        <div class="menu">
            <div class="left">
                
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>


<style>
.background{
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1260px;
    height: 100%;
}
.left img{
    height: 100%;
    position: absolute;
}
.baloon{
    position: absolute;
    top: 0;
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 88.5px;
}
.baloon img:first-child{
    width: 335px;
    height: 335px;
    position: absolute;
}
.baloon img:nth-child(2){
    width: 445px;
    height: 445px;
    position: absolute;
}
.baloon img:nth-child(3){
    width: 319px;
    height: 319px;
    position: absolute;
    margin-top: -13px;
}
.baloon img:nth-child(4){
    width: 499.5px;
    height: 499.5px;
    position: absolute;
    margin-top: -13px;
}
.baloon img:nth-child(5){
    width: 599.5px;
    height: 599.5px;
    position: absolute;
    z-index: -1;
}
.baloon img:nth-child(6){
    position: absolute;
    width: 699px;
    height: 699px;
    z-index: -1;
}
.baloon img:nth-child(7){
    position: absolute;
    right: 20%;
    z-index: -1;
    width: 233px;
    height: 434px;
}
.baloon img:nth-child(8){
    position: absolute;
    left: 20%;
    z-index: -1;
    width: 233px;
    height: 434px;
}
.baloon img:nth-child(9){
    position: absolute;
    right: 20%;
    z-index: -1;
    width: 233px;
    height: 434px;
}
</style>