<template>

  <div class="chart-container" data-cy="chart">
    
    <div class="year-cells">
      <div v-for="(year, index) in years" :key="index" data-cy="chart-header-cell">{{ year }}</div>
    </div>

    <div class="chart-div" data-cy="chart-data-cell">
        <div></div>
    </div>

      <div>Usage</div>

    </div>   
  
</template>


<style>
/*
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
}

.year-cells div {
  text-align: center;
  font-size: 12px;
  padding-left: 16px;
  padding-right: 12px;
}

.chart-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 40px;
    height: 45px;

}*/
</style>

<script>
export default {
  data() {
    return {
      years: ['', '2016', '2017', '2018', '2019', '2020', '2021', '2022', ''], // Åren för varje ring
    };
  }
  }
</script>



