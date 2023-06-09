// document.cookieの形式がname1=value1;name2=value2;... の文字列のとき
// keyが"max_results"に対応するvalueを取得する処理は以下になる


const get_cookie = (key) => {
  var value;
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var c = cookie[i];
    c = c.replace(/^[ ]+/, '')
    if (c.indexOf(key + "=") === 0) {
      value = Number(c.substring(12, c.length))
    }
  }
  return value
}

var max_results = Number(get_cookie("max_results"));