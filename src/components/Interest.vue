<!--<template>

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
 
</script>-->



<template>
  <div class="container">
    <div class="years">
      <div v-for="(year, index) in years" :key="index" class="year-cell">{{ year }}</div>
    </div>

    <div class="chart">
      <div v-for="framework in frameworks" 
      :key="framework.name" 
      class="framework"
      :style="{ color: framework.color }"
      >
        <!--<div class="framework-name">{{ framework.name }}</div>-->
        <div class="ring-row">
        <div class="framework-name">{{ framework.name }}</div>
          <div data-cy="chart-data-cell"
            v-for="(survey, index) in framework.surveys"
            :key="index"
            class="ring-circle"
            :style="{ backgroundColor: black, borderColor: framework.color }"
          >
          <div v-if="framework.name === 'React' && index === 0"
             :style="{ color: 'white' }"
          >React</div>
          <div v-else data-cy="chart-circle" 
            class="chart-circle"
            :style="{ color: 'white' }"
            >{{ survey.interest }}%</div>
            
            <!--<div data-cy="chart-circle">{{ survey.interest }}% </div>-->
          </div>
          <div class="framework-name">{{ framework.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  overflow-x: auto;
}

.years {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 11px;
   color: #4861ec; 

}

.years div {
  display: flex;
  padding-left: 15.5px;
  padding-right: 8.5px;
  color: white; 
}

.chart {
  display: flex;
  flex-direction: column; /* Diagrammen placeras i rader */
  align-items: center;
}


.framework {
  display: flex;
  flex-direction:  row-reverse;
  align-items: center;
  padding-top: 12px;
}

.framework-name {
  font-weight: bold;
  margin-top: 10px;
  font-size: 12px;
  width: 50px;
}

.ring-row {
  display: flex;
  justify-content: center; /* Centrera ringarna horisontellt */
  margin-top: 5px; /* Avstånd mellan ringarna i varje rad */
}

.ring-circle {
  color: #4861ec;
  border: solid 1px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  margin-right: 7px;
  margin-left: 7px;
}

</style>

<script>
import { frameworks } from '../../data/index.js';

export default {
  data() {
    return {
      years: ['', '2016', '2017', '2018', '2019', '2020', '2021', '2022', ''],
      frameworks: frameworks,
    };
  },
  // ...
};
</script>