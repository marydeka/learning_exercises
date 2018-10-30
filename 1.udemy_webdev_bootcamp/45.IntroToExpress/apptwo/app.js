var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Now serving your app!");
});