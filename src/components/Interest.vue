<template>

  <div class="chart-container">
    
    <div class="year-cells">
      <div v-for="(year, index) in years" :key="index" data-cy="chart-header-cell">{{ year }}</div>
    </div>

    <div class="chart-div" data-cy="chart-data-cell">
        <div class="chart-circle" data-cy="chart-circle">
        </div>
    </div>

      <div>Interest</div>

    </div>   
  
</template>


<style>

</style>

<script>
import { frameworks } from '../../data/index.js';

export default {
  data() {
    return {
      years: ['', '2016', '2017', '2018', '2019', '2020', '2021', '2022', ''],
      frameworks: frameworks,
    };
  }
  }
 
</script>



