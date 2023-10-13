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


