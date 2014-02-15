// web.js
var express = require("express");
var logfmt = require("logfmt");
var api = require("ig_api");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public_html'));

app.use("/loggedIn", express.static(__dirname + '/public_html/feed.html'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
