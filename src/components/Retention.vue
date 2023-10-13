<script setup>
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
        white-space: nowrap; /* förhindra innehållet från att brytas till nästa rad */
        padding-bottom: 20px; /* lite utrymme längst ner i .chart för att undvika klippning */
        
    }
</style>


