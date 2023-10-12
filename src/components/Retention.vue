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
          <div data-cy="chart-data-cell">{{ framework.name }}</div>

          <div data-cy="chart-data-cell"
            v-for="(survey, index) in framework.surveys || (survey, year) in years"
            :key="index"
            class="ring-circle"
            :style="{ backgroundColor: black, borderColor: framework.color }"
          > {{ year }}

            <div v-if="!survey.retention" data-cy="chart-data-cell" class="chart-data-cell"></div>
              <div data-cy="chart-circle" 
                class="chart-circle"
                :style="{ color: framework.color }"
                >{{ survey.retention }}%</div>
            </div>
          
          <div data-cy="chart-data-cell">{{ framework.name }}</div>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped>

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
  padding-right: 6.5px;
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
  width: 53px;
}

.ring-row {
  display: flex;
  justify-content: center; 
  margin-top: 5px; /* Avstånd mellan ringarna i varje rad */
  position: relative; /* Lägg till position: relative för att positionera pseudoelementen */
  
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
    position: relative; /* Lägg till position: relative för att positionera pseudoelementen */

      /* Skapa linje till vänster (för alla utom den första ringen) */
  &::before {
    content: '';
    position: absolute;
    height: 1px; /* Höjden på linjen */
    width: 7px; /* Bredden på linjen */
    background-color: white; /* Färg på linjen */
    left: -12px; /* Justera vänsterposition för linjen */
    top: 50%; /* Centrera linjen vertikalt */
    transform: translateY(-50%); /* Centrera linjen vertikalt */
  }
  
  /* Skapa linje till höger (för alla utom den sista ringen) */
  &::after {
    content: '';
    position: absolute;
    height: 1px; /* Höjden på linjen */
    width: 7px; /* Bredden på linjen */
    background-color: white; /* Färg på linjen */
    right: -12px; /* Justera högerposition för linjen */
    top: 50%; /* Centrera linjen vertikalt */
    transform: translateY(-50%); /* Centrera linjen vertikalt */
  }

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