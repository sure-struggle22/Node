const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;
const userData = [];
app.use(express.urlencoded());

app.post('/home', function (req, res) {
    var currentUser = {
        "username": req.body.username,
        "password": req.body.pwd,
        "name": req.body.name,
        "college": req.body.college,
        "yearOfGraduation": req.body.year
    };

    userData.push(currentUser);
    res.send('<h1>Succesfully Registered<h1>');
});
app.get('/profiles', function (req, res) {
    res.send(userData);
});
app.get('/home', function (req, res) {
    res.send('Hello');
});
app.listen(port, function (req, res) {
    console.log('listening on the port ' + port);
})