<script setup>
import DefaultHeaderView from '@/components/AllPages/Header/DefaultHeaderView.vue';
import Company from '../components/HomePage/AboutCom.vue'
import BigEarth from '../components/HomePage/ClientWorld.vue'
import Offers from '../components/HomePage/OffersClient.vue'
import ContentView from '../components/HomePage/ContentView.vue'
</script>
<template>
  <div class="About">
    <DefaultHeaderView />
    <BigEarth />
    <Company />
    <ContentView />
    <Offers/>
  </div>
</template>

<style>

</style>
