//よくある間違い: ループ内でクロージャを作成する
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures#creating_closures_in_loops_a_common_mistake
//2つめのサンプル

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'メールアドレス'},
      {'id': 'name', 'help': '氏名'},
      {'id': 'age', 'help': '年齢 (17歳以上)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
