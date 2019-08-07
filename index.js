/*const http = require('http');
const data = {
    firstname: 'Bhakti',
    lastname: 'Verma'
}
const site = http.createServer(function(req, res) {
    console.log('helloooo !!!');
    console.log(req.headers);
    console.log(req.url);
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
});

site.listen(3000);*/


var express = require('express')
var app = express();
app.get('/', function(req, res) {
    res.send('hello guys')
})
app.listen(3000)