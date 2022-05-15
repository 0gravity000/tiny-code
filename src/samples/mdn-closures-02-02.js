//クロージャのスコープチェーン
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures#closure_scope_chain
//2つめのサンプル

// 無名関数を使わずに書くこともできます。
// グローバルスコープ
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // 外側の関数スコープ
      return function sum4(d){
        // ローカルスコープ
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20
