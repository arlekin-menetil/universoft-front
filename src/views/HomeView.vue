<script setup>
import HeaderView from '../components/AllPages/HeaderVue.vue'
import ConsulTate from '../components/AllPages/Header/ConsulTate.vue'
import ContentView from '../components/HomePage/ContentView.vue'
import Company from '../components/HomePage/AboutCom.vue'
import BigEarth from '../components/HomePage/ClientWorld.vue'
import Offers from '../components/HomePage/OffersClient.vue'
import FooterView from '../components/AllPages/FooterVuew.vue'
</script>

<template>
<div class="HomePage">
 <HeaderView />
 <ConsulTate />

 <ContentView />
 <Company />
 <BigEarth />
 <Offers/>

 <FooterView />
</div>
</template>

<style>
</style>