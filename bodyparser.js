
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send('<h1>hello guys</h1>')
})
app.post('/', function(req, res) {
    console.log(req.body);
    res.send('hello world')
})
app.delete('/', function(req, res) {
    res.send('delete working')
});
app.listen(3000);
