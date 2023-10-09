<template>
  <div class="chart-container">
    
    <div class="year-cells">
      <div v-for="(year, index) in years" :key="index" data-cy="chart-header-cell">{{ year }}</div>
    </div>

    <div class="chart-div" data-cy="chart-data-cell">
        <canvas ref="canvas" width="450" height="70">React</canvas>
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
  padding-top: 60px;
  color: white;
  width: 450px;
}

.year-cells div {
  text-align: center;
  font-size: 9.5px;
  padding-left: 15.5px;
  padding-right: 8.5px;
}

.chart-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
    margin-bottom: 60px;
    height: 45px;

}
</style>

<script>
import { frameworks } from '../../data/index.js';

export default {
  data() {
    return {
      ringTexts: ['93%', '93%', '91%', '89%', '88%', '84%', '83%'],
      years: ['', '2016', '2017', '2018', '2019', '2020', '2021', '2022', ''], // Åren för varje ring
    };
  },
  
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext('2d');

    // rita en linje med 7 ringar
    const startX = 90;
    const startY = 50;
    const endX = 370;
    const endY = 50;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = frameworks[0].color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // lägg till texten "React" före linjen
    const textBeforeLineX = startX - 30; // justera X-koordinaten för texten
    ctx.fillStyle = frameworks[0].color; // färgen på texten
    ctx.font = 'bold 11px Arial'; // stil och storlek på texten
    ctx.textAlign = 'right'; // textens justering
    ctx.textBaseline = 'middle';
    ctx.fillText('React', textBeforeLineX, startY);

    // rita en linje före den första ringen
    const lineBeforeFirstRingX = startX - 25; // justera X-koordinaten
    ctx.beginPath();
    ctx.moveTo(lineBeforeFirstRingX, startY);
    ctx.lineTo(startX, startY);
    ctx.stroke();

    // rita en linje efter den sista ringen
    const lineAfterLastRingX = endX + 25; // justera X-koordinaten
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(lineAfterLastRingX, endY);
    ctx.stroke();

    // lägg till texten "React" efter linjen
    const textAfterLineX = lineAfterLastRingX + 40; // justera X-koordinaten för texten
    ctx.fillStyle = frameworks[0].color ; // färgen på texten
    ctx.fillText('React', textAfterLineX, endY);

    // rita 7 ringar längs linjen
    const numRings = 7;
    const ringRadius = 14;
    const ringBorderWidth = 3;

    for (let i = 0; i < numRings; i++) {
      const ratio = i / (numRings - 1);
      const x = startX + ratio * (endX - startX);
      const y = startY + ratio * (endY - startY);
      const text = this.ringTexts[i];
      
      //const dataCyValue = `chart-circle-${text.replace('%', '')}`;
      //const dataCyValue = 'chart-circle';
      //canvas.setAttribute(`data-cy-${i}`, dataCyValue); // detta attribut kommer att vara på canvas-elementet

    // Skapa en ny div-element för varje cell
    const cell = document.createElement('div');
    cell.setAttribute('data-cy', 'chart-circle'); // sätt önskat värde här


      ctx.beginPath();
      ctx.arc(x, y, ringRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.stroke();
      
      
      // Lägg till data-cy attribut för varje ring baserat på texten (procentsatsen)
        //const dataCyValue = 'chart-circle-' + text.replace('%', ''); // Ta bort procenttecknet från texten
        //ctx.canvas.setAttribute('data-cy', 'chart-circle');

      // rita texten inuti ringen
      ctx.fillStyle = 'white';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x, y);
      
      // lägg till cellen i DOM
      //this.$refs.canvas.parentElement.appendChild(cell);
      this.$el.querySelector('[data-cy="chart-data-cell"]').appendChild(cell);
     

    }
  },
};
</script>
