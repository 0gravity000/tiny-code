//よくある間違い: ループ内でクロージャを作成する
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake
//1つめのサンプル

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
    {'id': 'email', 'help': 'あなたの E メールアドレス'},
    {'id': 'name', 'help': 'あなたのフルネーム'},
    {'id': 'age', 'help': 'あなたの年齢 (17 歳以上)'}
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
