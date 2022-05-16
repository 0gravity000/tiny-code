<template>
  <div class="c-clock">
    <span class="c-clock__hour"></span> <!-- 時計 -->
    <span class="c-clock__min"></span> <!-- 分針 -->
    <span class="c-clock__sec"></span> <!-- 秒針 -->
    <span class="c-clock__12">12</span> <!-- 時計文字 -->
    <span class="c-clock__3">3</span> <!-- 時計文字 -->
    <span class="c-clock__6">6</span> <!-- 時計文字 -->
    <span class="c-clock__9">9</span> <!-- 時計文字 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      excutedTimer: ""
    }
  },
  created() {
    this.displayTime()
  },
  mounted() {
  },
  unmounted() {
    clearInterval(this.excutedTimer)
  },
  methods:{
    displayTime: function(){
      this.excutedTimer = setInterval(() => {
        // 現在時間の取得
        const now = new Date();
        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();

        // 時、分、秒を元に角度を計算
        const degH = h * (360 / 12) + m * (360 / 12 / 60);
        const degM = m * (360 / 60);
        const degS = s * (360 / 60);

        // 各要素を取得
        const elementH = document.querySelector(".c-clock__hour");
        const elementM = document.querySelector(".c-clock__min");
        const elementS = document.querySelector(".c-clock__sec");

        // styleを追加
        elementH.style.transform = `rotate(${degH}deg)`;
        elementM.style.transform = `rotate(${degM}deg)`;
        elementS.style.transform = `rotate(${degS}deg)`;
      }, 1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c-clock {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #333;
  border-radius: 50%;
}
.c-clock__hour {
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 5px);
  width: 10px;
  height: 150px;
  background: #333;
  transform-origin: bottom;
}
.c-clock__min {
  position: absolute;
  top: calc(50% - 180px);
  left: calc(50% - 2px);
  width: 4px;
  height: 180px;
  background: #333;
  transform-origin: bottom;
}
.c-clock__sec {
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 1px);
  width: 2px;
  height: 200px;
  background: #ff0000;
  transform-origin: bottom;
}
.c-clock__12 {
  position: absolute;
  top: 10px;
  left: calc(50%);
  transform: translateX(-50%);
  font-size: 18px;
}
.c-clock__3 {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
}
.c-clock__6 {
  position: absolute;
  bottom: 10px;
  left: calc(50%);
  transform: translateX(-50%);
  font-size: 18px;
}
.c-clock__9 {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 18px;
}
</style>
