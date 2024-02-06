<script setup>
import DefaultHeaderView from '@/components/AllPages/Header/DefaultHeaderView.vue';
import FormView from '../components/VacancyPage/FormVew.vue'

</script>


<template>
    <div class="Contact">
        <DefaultHeaderView />
        <div class="videoback">
            <video muted loop autoplay plays-inline >
                <source src="../../public/video/3Back.mp4" />
              </video>
        </div>
        <FormView />
        
    </div>
    
</template>

<style>
.videoback{
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
}
/*background*/
.Contact .videoback video{
    width:100%;
    height: 100vh;
    left:0;
    top: 0;
    z-index: -1;
    object-fit: cover;
    position: absolute;  
}
</style>