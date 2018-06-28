var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static( __dirname + '/build/dist/build' ));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./build/dist/build/index.html"));
})

app.listen(8000);