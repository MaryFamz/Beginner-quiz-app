<template>
    <div class="button-part">
        <button>{{ title }}</button>
    </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style scoped>
.button-part button{
    padding: 1em 2em;
    color: #0606f7;
    background-color: black;
    border: none;
    border-radius: 5px;
}
.button-part button:hover{
    background-color: #0606f7;
    color: black;
}
</style>