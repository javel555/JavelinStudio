/* 1. expressモジュールをロードし、インスタンス化してappに代入 */
var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* 3. 以降、アプリ固有処理 */
app.get("/", function(req, res, next){
    res.render("index", {});
});

/* 2. listen()メソッドを実行して、事前に設定したポートで待ち受け */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
