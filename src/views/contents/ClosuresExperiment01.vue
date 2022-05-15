<template>
  <div class="closures-experiment-01">
    <h1>フォントサイズを変更する</h1>
      <a href="#" id="size-12">12px</a>&nbsp;
      <a href="#" id="size-14">14px</a>&nbsp;
      <a href="#" id="size-16">16px</a>&nbsp;
  </div>
</template>

<script>
export default {
  data() {
    return {
      size12: "",
      size14: "",
      size16: "",
    }
  },
  mounted() {
    this.size12 = this.makeSizer(12);
    this.size14 = this.makeSizer(14);
    this.size16 = this.makeSizer(16);
    document.getElementById('size-12').onclick = this.size12;
    document.getElementById('size-14').onclick = this.size14;
    document.getElementById('size-16').onclick = this.size16;

  },
  computed:{
  },
  methods:{
    makeSizer(size){
      return function() {
        document.body.style.fontSize = size + 'px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
