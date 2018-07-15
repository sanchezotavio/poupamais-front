require('dotenv').load();

var url
var port_env

if (process.env.NODE_ENV !== 'production') {
    url = process.env.urlAPP
    port_env = process.env.TEST_PORT
} else {
    url = process.env.urlProduction
    port_env = process.env.PORT
}


const express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || port_env,
    publicDir = process.argv[2] || __dirname + '/public',
    path = require('path'),
    cors = require('cors'),
    request = require('request');



app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use(express.static(publicDir));
app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

app.get("/", function (req, res) {
    res.sendFile(path.join(publicDir, "/index.html"));
});


app.get("/search", function (req, res) {

    var options = {
        url: `https://api-endpoint.igdb.com/games/?search=${req.query.term}&fields=*`,
        headers: {
            'user-key': 'f07cb189176b1eb896aec56c7b59d621',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    };
    
      request(options, function (error, response, body) {
        console.log(body)
        res.json(body)
    });

});

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);