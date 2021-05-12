const http = require('http');
const url = require('url');
const querystring = require('querystring ');
const request = require('request');
// const { query } = require('express');
const server = http.createServer(function (req, res) {
    if (req.url === ('/hello') && req.method === ('GET')) {
        res.write('Hello from the ' + req.method);
        res.end();

    }
    else if (req.url === ('/hello') && req.method === ('POST')) {
        res.write('Hello from the ' + req.method);
        res.end();
    }
    else if (req.url === '/me', req.method === ('GET')) {

        const parsed = url.parse(req.url);
        const query = querystring.parse(parsed.query);
        // querystring.unescape(queryObject);
        console.log(parsed);
        console.log(query);



        // res.write(queryObject);

        const req1 = query.name;
        res.write('hello ' + req1);
        res.end();
    }

});

server.listen(3000);