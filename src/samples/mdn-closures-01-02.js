//クロージャでプライベートメソッドを模倣する
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures
//2つめのサンプル

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    }
  };
  
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  
  alert(counter1.value());  // 0.
  
  counter1.increment();
  counter1.increment();
  alert(counter1.value()); // 2.
  
  counter1.decrement();
  alert(counter1.value()); // 1.
  alert(counter2.value()); // 0.