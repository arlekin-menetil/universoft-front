<script setup>
import Partner from '../../src/components/PartnersPage/PartnersVuew.vue'
import NavHeader from '../../src/components/AllPages/HeaderCompany.vue'
import Footer from '../components/AllPages/FooterVuew.vue'
</script>



<template>
    <div class="Partners_Carusel">
<NavHeader />
<Partner />
<Footer />
    </div>
</template>

<style>
Partner{
    position: absolute;
}
</style>