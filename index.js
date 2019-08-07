const http = require('http');
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

site.listen(3000);