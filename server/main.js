const express = require('express');
let app = new express();

app.get('/', function (req, res) {
    res.render('./../app/index.ejs', {});
}).listen(9989);


