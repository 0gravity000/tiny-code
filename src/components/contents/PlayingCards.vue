<template>
  <div class="playing-cards">
    <h1>トランプ</h1>
    <!-- FYI:
    <p>{{pileOfCards}}</p>
    <p>{{convertedPileOfCards}}</p>
    <div class="row">
      <div class="col card-shape" v-for="card in convertedPileOfCards" :key="card">
        {{card.mark}}{{card.number}}
      </div>
    </div>
    -->
    <span class="card-shape" v-for="card in convertedPileOfCards" :key="card">
      {{card.mark}}{{card.number}}
    </span>
    <div class="shuffle-button">
      <button type="button" @click="shuffleCards">カードをシャッフル</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pileOfCards: [],
      convertedPileOfCards: []
    }
  },
  mounted() {
    this.pileOfCards = this.makeCards()
    this.convertedPileOfCards = this.convertCards()
  },
  computed:{
  },
  methods:{
    makeCards() {
      const Cards = [];
      //FYI: 'heart'♥, 'clover'♣, 'diamond'♦, 'spade'♠
      for(let mark of ['heart', 'clover', 'diamond', 'spade']) {  // 全カードを生成
        for(let number=1; number<=13; number++) {
            Cards.push({ mark, number})
        }
      }
      Cards.push({'mark':'joker', number:14}) //ジョーカーを入れる
      return Cards
    },
    convertCards() {
      const charToEmoji = { 'heart': '♥', 'clover': '♣', 'diamond': '♦', 'spade': '♠', 'joker': '🃏' }
      const numToAJQK = { 1: 'A', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
       10: '10', 11: 'J', 12: 'Q', 13: 'K', 14: '' }
      return this.pileOfCards.map((x) => ({ mark:charToEmoji[x.mark], number:numToAJQK[x.number] }))
      //FYI: 基本形
      //return this.PileOfCards.map((x) => ({ mark:x.mark, number:x.number}))
    },
    shuffleCards() {
      console.log("カードをシャッフル")
      for (let i = this.pileOfCards.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.pileOfCards[i], this.pileOfCards[j]] = [this.pileOfCards[j], this.pileOfCards[i]];
      }
      console.log(this.pileOfCards)
      this.convertedPileOfCards = this.convertCards()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-shape {
  font-size: 1.5rem;
  /*border: solid; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  word-break: break-all;
}
.shuffle-button {
  margin-top: 1.5rem;
}
</style>
