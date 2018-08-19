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


app.get("/calc/:type/:value/:percent/:time",  (req, res) => {

    var options = {
        url: `http://localhost:4000/calc/${req.params.type}/${req.params.value}/${req.params.percent}/${req.params.time}`,
        headers: {
            'user-key': 'f07cb189176b1eb896aec56c7b59d621',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    };
      request(options,  (error, response, body) => {       
        res.json(body)
    });

});

console.log("%s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);