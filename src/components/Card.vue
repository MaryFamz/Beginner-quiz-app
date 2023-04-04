<template>
    <div class="card">
        <img :src="quizpart.img" alt="sodiq">
        <div class="card-text">
          <h2>{{ quizpart.name }}</h2>
          <p>{{ quizpart.questions.length }} questions</p>
          <Button title = "Open"/>
        </div>
    </div>
</template>

<script setup>
import Button from './Button.vue'

const props = defineProps(['quizpart'])
</script>


<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
   }
  
   .card img {
    width: 100%;
    height: 190px;
    margin: 0;
   }
  
   .card .card-text {
    padding: 0 5px;
   }
  
    .card .card-text  h2{
    font-weight: bold;
   }
</style>