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


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(res, req, next) {
    console.log("i am in middle");
    console.log(req.body);
    next();
})
app.get('/', function(req, res) {
    res.send('<h1>hello guys</h1>')
})
app.post('/', function(req, res) {
    console.log(req.body);
    res.send('hello world')
})
app.put('/', function(req, res) {
    console.log(req.body);
    res.send('put')
})
app.delete('/', function(req, res) {
    res.send('delete working')
});
app.listen(3000);