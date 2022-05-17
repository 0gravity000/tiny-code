<template>
  <div class="sidebar-home">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <router-link to="/digital-clock">デジタル時計</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/analog-clock">アナログ時計</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/playing-cards">トランプ</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/geo-location">位置情報</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/closures-experiment-01">クロージャ実験01</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/canvas-experiment-01">Canvas実験01</router-link>
      </li>
      <!--       
      <li class="list-group-item">
      <details>
      <summary>xxx</summary>
        <li class="list-group-item">
          <router-link to="/closures-experiment-01">xxx</router-link>
        </li>
      </details>
      </li>
       -->
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding-left: 1rem;
}
</style>
