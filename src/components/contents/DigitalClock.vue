<template>
  <div class="digital-clock">
		<h1>Digital Clock</h1>
		<span id="digital-clock"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      excutedTimer: ""
    }
  },
  mounted() {
    this.displayTime()
  },
  unmounted() {
    clearTimeout(this.excutedTimer)
  },
  methods:{
    displayTime: function(){
      var elt = document.getElementById("digital-clock");
      var now = new Date();
      elt.innerHTML = now.toLocaleTimeString();
      this.excutedTimer = setTimeout(this.displayTime, 1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#digital-clock {
  font: bold 24pt sans;
  background: #ddf;
  padding: 10px;
  border: solid black 2px;
  border-radius: 10px;
}
</style>
