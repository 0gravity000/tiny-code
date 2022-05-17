<template>
  <div class="geo-location">
		<h1>位置情報</h1>
    <p id="geo-location-area">{{element}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      element: ""
    }
  },
  mounted() {
    this.whereami()
    //this.whereami(document.getElementById("geo-location-area").innerHTML)
  },
  methods:{
    //位置情報を非同期に取得し.指定した要素中に表示する。
    whereami: function(elt) {
      let self = this //thisはクロージャー内で参照できないのでselfに退避
      //this.element = elt
      //次のオブジェクトをgetCurrentPositionOの3番目の引数として渡す。
      var options = {
      //trueを設定した場合は、可能であれば、(例えばGPSから)高精度な位間情報を
      //取得する。なお、この設定がノyッテリ寿命に影響する場合もある。
      enableHighAccuracy: false,// おおよその位超情報で問題ない(デフォルト値)。
      //キャッシュされている位置情報で問題なければ、このプロパティを設定する。
      //デフォルトは0。この場合、位簡情報を毎回新たに取得する。
      maximumAge: 300000,	// 5分以内であれば問題ない。
      //位昭惆報を取得するのにどの程度の時間待つことができるか。
      //デフォルトは無限大。この場合、getCurrentPosition()はタイムアウトしない。
      timeout:15000	//15秒以上は待てない。
      };

      if (navigator.geolocation) {  //サポートされていれば、位同惘報を要求する。
        console.log("サポートされている")
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        console.log("サポートされていない")
        this.element ="Geolocation not suported in this browser";
        //elt ="Geolocation not suported in this browser";
        //elt.innerHTMl ="Geolocation not suported in this browser";
      }

      //位置情報要求が失敗した場合は、この関数が呼び出される。
      function error(e) {
        //エラーオブジェクトはco加(数値)とmessage (テキスト)を持つ。
        //コード値は以下のとおり。
        // 1:位町情報の取得をユーザが許可しなかった。
        // 2:ブラウザは位$3情報を取得できなかった。
        // 3：タイムアウトが発生した。
        self.element = "Geolocation error " + e.code + ": " + e.message;
        //elt = "Geolocation error " + e.code + ": " + e.message;
        //elt.innerHTMl = "Geolocation error " + e.code + ": " + e.message;
      }
 
      //位图情報の取得に成功した場合、この関数が呼び出される。
      function success(pos) {
        //以下のフィールドは常に取得できる。タイムスタンプは、内側のcoords
        //オブジェクト中ではなく、外側のposオブジェクト中にあることに注意。
        var msg = "At " +
        new Date(pos.timestamp).toLocaleString() + " you were within " +
        pos.coords.accuracy + " meters of latitude " +
        pos.coords.latitude + "longitude " +
        pos.coords.longitude + ".";

        //デバイスが高度を返す場合は、高度情報を追加する。
        if (pos.coords.altitude) {
          msg += " You are " + pos.coords.altitude + " ± " +
          pos.coords.altitudeAccuracy + "meters above sea level.";
        }
        //デバイスが速度や移動方向を返す場合は、この情報も追加する。
        if (pos.coords.speed) {
          msg += " You are travelling at " +
          pos.coords.speed + "m/s on heading " +
          pos.coords.heading + ".";
        }
        console.log(elt)
        //console.log(elt.innerHTMl)
        console.log(msg)
        self.element = msg; //すべての位麗情報を表示する。
        //elt = msg; //すべての位麗情報を表示する。
        //elt.innerHTMl = msg; //すべての位麗情報を表示する。
        //this.element = msg
      }

    },
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
