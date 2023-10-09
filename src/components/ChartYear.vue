<template>
  <div class="chart-container">
    <canvas ref="canvas" width="450" height="70"></canvas>
    <div class="chart-years">
      <span
        v-for="(year, index) in years"
        :key="index"
        class="chart-header-cell"
        :data-cy="`chart-header-cell-${year}`"
      >
        {{ year }}
      </span>
    </div>
  </div>
</template>

<style>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.chart-years {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
</style>

<script>
export default {
    data() {
        return {
            years: ['', '2016', '2017', '2018', '2019', '2020', '2021', '2022', ''], // Åren för varje ring
    };
},
</script>