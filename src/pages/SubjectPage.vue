<template>
    <div class="options-container">
        <Card v-for="quiz in quizzes" :key="quiz.id" :quizpart="quiz"/>
    </div>
      <p v-if="!quizzes.length"> NO SUBJECT FOUND SODIQ!!!!</p>
</template>

<script setup>
import {ref,watch} from 'vue'
import Card from '../components/Card.vue'
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
.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
   }
</style>