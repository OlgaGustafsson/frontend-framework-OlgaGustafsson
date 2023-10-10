<!--<script setup>
    import ChartReact from './ChartReact.vue'
    import ChartVue from './ChartVue.vue'
    import ChartAngular from './ChartAngular.vue'
    import ChartEmber from './ChartEmber.vue'
    import ChartPreact from './ChartPreact.vue'
    import ChartSvelte from './ChartSvelte.vue'
    import ChartAlpine from './ChartAlpine.vue'
    import ChartLit from './ChartLit.vue'
    import ChartSolid from './ChartSolid.vue'
    import ChartQwik from './ChartQwik.vue'
    import ChartStencil from './ChartStencil.vue'
  
</script>

<template>
    <div class="chart" data-cy="chart">
        <ChartReact />
        <ChartVue />
        <ChartAngular />
        <ChartEmber />
        <ChartPreact />
        <ChartSvelte />
        <ChartAlpine />
        <ChartLit />
        <ChartSolid />
        <ChartQwik />
        <ChartStencil />
    </div>
</template>

<style scoped>
    .chart {
        overflow-x: auto;
        white-space: nowrap; /* Förhindra innehållet inuti .chart från att brytas till nästa rad */
        padding-bottom: 20px; /* Lägg till lite utrymme längst ner i .chart för att undvika klippning */
        
    }
</style>-->




<template>
  <div class="container" data-cy="chart">
    <div class="years">
      <div v-for="(year, index) in years" :key="index" data-cy="chart-header-cell">{{ year }}</div>
    </div>

    <div class="chart">
      <div v-for="framework in frameworks" 
        :key="framework.name" 
        class="framework"
        :style="{ color: framework.color }"
        >
        
        <div class="ring-row">
        <div class="framework-name">{{ framework.name }}</div>

          <div data-cy="chart-data-cell"
            v-for="(survey, index) in framework.surveys"
            :key="index"
            class="ring-circle"
            :style="{ backgroundColor: black, borderColor: framework.color }"
          >
          <div v-if="framework.name === 'React' && index === 0">React</div>

          <div v-else-if="framework.name === 'Vue' && index === 0"
            data-cy="chart-circle"
            :style="{ color: '#4861ec' }"
           >93%</div>

           <div v-else-if="framework.name === 'Vue' && index === 1"
            data-cy="chart-circle"
            :style="{ color: '#47cfed' }"
           >React</div>

           <div v-else-if="framework.name === 'Vue' && index === 2"
            data-cy="chart-circle"
            :style="{ color: '#47cfed' }"
           >Vue</div>

          <div v-else data-cy="chart-circle" 
            class="chart-circle"
            :style="{ color: framework.color }"
            >{{ survey.retention }}%</div>
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
  flex-direction: row-reverse;
  align-items: center;
  padding-top: 12px;
  width: 450px;
  
}

.framework-name {
  font-weight: bold;
  margin-top: 10px;
  font-size: 12px;
  width: 50px;
}

.ring-row {
  display: flex;
  justify-content: center; 
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

.chart-circle {
    color: white;

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