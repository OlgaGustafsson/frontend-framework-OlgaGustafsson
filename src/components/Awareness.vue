<!--<template>

  <div class="chart-container">
    
    <div class="year-cells">
      <div v-for="(year, index) in years" :key="index" data-cy="chart-header-cell">{{ year }}</div>
    </div>

    <div class="chart-div" data-cy="chart-data-cell">
        <div></div>
    </div>

      <div>Awareness</div>

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
            <div data-cy="chart-circle"
              :style="{ color: white }"
            >{{ survey.awareness}}% </div>
          </div>
          <div class="framework-name">{{ framework.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<style>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;  
   color: #4861ec; 
}

.years {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 9.5px;

}

.years div {
  display: flex;
  padding-left: 15.5px;
  padding-right: 8.5px;
  color: white;
}

.chart {
  display: grid;
  flex-direction: column; /* Diagrammen placeras i rader */
  align-items: center;
  color: #4861ec; 
}


.framework {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.framework-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.ring-row {
  display: flex;
  justify-content: center; /* Centrera ringarna horisontellt */
  margin-top: 5px; /* Avstånd mellan ringarna i varje rad */
}

.ring-circle {
color: white;
border: solid 1px;
border-radius: 50%;
height: 35px;
width: 35px;
display: flex;
justify-content: center;
align-items: center;
}

</style>-->

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
