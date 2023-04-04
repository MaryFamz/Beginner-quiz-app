<template>
    <header >
        <a href="#"><h1>quizzy</h1></a>
        <input type="text" placeholder="Search..." v-model.trim="search">
        <ul class="links">
          <li class="link"><RouterLink to="/">Home</RouterLink></li>
          <li class="link"><RouterLink to="/subject">Subjects</RouterLink></li>
          <li class="link"><RouterLink to="/register">Register</RouterLink></li>
          <li class="link"><RouterLink to="/login">Login</RouterLink></li>
          <li class="link"> <Button title="User"/> </li>
        </ul>
    </header>
</template>

<script setup>
import {ref,watch} from 'vue'
import Button from '../components/Button.vue'
import questions from '../data/questions.json'

const quizzes = ref(questions)
const search = ref('')

watch(search, () => {
  quizzes.value = questions.filter(question => {
    return question.name.toLowerCase().includes(search.value.toLowerCase())
  })
})
</script>

<style scoped>
  header {
   margin-bottom: 10px;
   margin-top: 30px;
   display: flex;
   align-items: center;
  }
  header h1 {
   font-weight: bold;
   margin-right: 30px;
  }
  header input {
   border: none;
   background-color: rgba(128,128,128, 0.1);
   padding: 10px;
   border-radius: 5px;
  }
 
  .links {
   list-style: none;
   display: flex;
   gap: 15px;
   align-items: center;
   margin-left: auto;
  }
 
  .links a {
   padding-block: 10px;
   color: black;
   text-decoration: none;
   font-weight: 600;
   font-size: 1.3rem;
  }
</style>