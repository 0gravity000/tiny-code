//よくある間違い: ループ内でクロージャを作成する
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake
//5つめのサンプル

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'メールアドレス'},
      {'id': 'name', 'help': '氏名'},
      {'id': 'age', 'help': '年齢 (17歳以上)'}
    ];

  helpText.forEach(function(text) {
      document.getElementById(text.id).onfocus = function() {
      showHelp(text.help);
      }
  });
}

setupHelp();
