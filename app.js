/* 1. expressモジュールをロードし、インスタンス化してappに代入 */
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して、3000番ポートで待ち受け */
var server = app.listen(3000, function(){
    console.log("Node.js is listening to Port:" + server.address().port);
});

/* 3. 以降、アプリ固有処理 */
app.set('view engine', 'ejs');

app.get("/", function(req, res, next){
    res.render("index", {});
});