const http = require('http');

http.createServer(function (req, res) {

    res.write('this is a response for the request');
    res.end;
    }
).listen(3000);

console.log('hellow world');