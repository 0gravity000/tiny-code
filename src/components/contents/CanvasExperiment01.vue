<template>
  <div class="canvas-experiment-01">
    <h2>マウスの軌跡を表示する</h2>
    <div><button @click="clearCanvas">クリア</button></div>
    <div>
      <canvas id="mycanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasWidth: "600",
      canvasHeight: "400",
      context: "",
    }
  },
  mounted() {
    let mycanvas = document.getElementById('mycanvas');
    this.context = mycanvas.getContext('2d');
    //mycanvas.addEventListener('mousemove', this.mouseMove);
    mycanvas.addEventListener('mousemove', this.mouseMove);
  },
  methods: {
    mouseMove: function(event){
      this.context.beginPath();
      this.context.arc(event.offsetX, event.offsetY, 10, 0, 2 * Math.PI);
      this.context.stroke();
    },
    clearCanvas: function() {
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mycanvas{
  border:1px solid #000000;
}

</style>