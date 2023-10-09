<template>
  <div class="chart-container">
    
    <div class="year-cells">
      <div v-for="(year, index) in years" :key="index" data-cy="chart-header-cell">{{ year }}</div>
    </div>

  </div>
</template>

<style>
.chart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45px;
}

.year-cells {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  color: white;
}

.year-cells div {
  text-align: center;
  font-size: 9.5px;
  padding-left: 14.5px;
  padding-right: 9.5px;
}

</style>

<script setup>


export default {
  data() {
    return {
      years: ['', '2016', '2017', '2018', '2019', '2020', '2021', '2022', ''], // Åren för varje ring
    };
  },
  }

  </script>