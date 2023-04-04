<template>
 <div class="container"> 
  <Header/>
  <RouterView/>
 </div>
</template>

<script setup>
import Header from './components/Header.vue'
import {RouterView} from 'vue-router'

</script>



<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

</style>
