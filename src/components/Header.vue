<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>

<template>
    <header class="my-header">
        <h1>{{ msg }}</h1>
    </header>   
</template>

<!--<style scoped>
.my-header {
  background-color: black;
  color: white;
  margin: 0;
  height: 50px;
}
</style>-->