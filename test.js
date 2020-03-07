var express = require('express');
var app = express();
app.get('/', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('My luck number is ' + num);
});
app.listen(8080, function() {
    console.log('Example app listen on port 8080')
});
