<template>
  <div class="chart-container" data-cy="chart-data-cell">
    <canvas ref="canvas" width="450" height="70">Stimulus</canvas>
  </div>
</template>

<style>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;

}
</style>

<script>
export default {
    data() {
        return {
            ringTexts: ['67%', '62%'],
    };
},


  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext('2d');
    
    // rita en linje med 3 ringar
    const startX = 90;
    const startY = 50;
    const endX = 370;
    const endY = 50;
    const numRings = 2;
    const ringRadius = 14;
    const ringBorderWidth = 3;
    //const horizontalSpacing = 1; // ökat avstånd mellan ringarna horisontellt
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = '#5a9e38';
    ctx.lineWidth = 2;
    ctx.stroke();

    // lägg till texten "Stimulus före linjen
    const textBeforeLineX = startX - 30; // justera X-koordinaten för texten
    ctx.fillStyle = '#5a9e38'; // färgen på texten
    ctx.font = 'bold 11px Arial'; // stil och storlek på texten
    ctx.textAlign = 'right'; // textens justering
    ctx.textBaseline = 'middle';
    ctx.fillText('Stimulus', textBeforeLineX, startY);

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

    // lägg till texten "Stimulus" efter linjen
    const textAfterLineX = lineAfterLastRingX + 50; // justera X-koordinaten för texten
    ctx.fillText('Stimulus', textAfterLineX, endY);
    

    
    //for (let i = 0; i < numRings; i++) {
      //const ratio = i / (numRings - 1);
      //const x = startX + (i / (numRings - 1)) * (endX - startX); // + ratio * horizontalSpacing;
      //const y = startY + ratio * (endY - startY);
      //const text = this.ringTexts[i];

      // Åren du vill placera cirklarna på
      const yearsToPlace = [0, 1, 2, 3, 4, 5];

      for (let i = 0; i < numRings; i++) {
        const year = yearsToPlace[i];
        const x = startX + ((year + 4) / (5 - 0)) * (endX - startX);
        const text = this.ringTexts[i];
        
        //const dataCyValue = `chart-circle-${text.replace('%', '')}`;
        const dataCyValue = 'chart-circle';
        canvas.setAttribute(`data-cy-${i}`, dataCyValue); // detta attribut kommer att vara på canvas-elementet

      
      ctx.beginPath();
      ctx.arc(x, endY, ringRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'black'; // fyll färgen i ringen
      ctx.fill();
      ctx.stroke();
      //canvas.setAttribute('data-cy', 'chart-circle');

        // rita texten inuti ringen
      ctx.fillStyle = 'white'; // färgen på texten
      ctx.font = '10px Arial'; // stil och storlek på texten
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x, endY);
      
    }
  }
};
</script>