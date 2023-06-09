// document.cookieの形式がname1=value1;name2=value2;... のとき
// keyが"max_results"に対応するvalueを取得する処理は以下になる

var max_result;
var cookies = document.cookie.split(';');
for(var i = 0; i < cookies.length;i++) {
    var c = cookie[i];
    c = c.replace(/^[ ]+/, '')
    if(c.indexOf("max_results=") === 0) {
        max_results = Number(c.substring(12, c.length))
    }
}
