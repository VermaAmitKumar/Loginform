const express = require('express');
const hbs = require('hbs')
var bodyParser = require('body-parser');

var app = express();
app.use(express.bodyParser());  
var jsonParser = bodyParser.json()

app.set('view engine', 'hbs');
app.get('/', (req,res)=> {
    res.render('login.hbs');
})
app.post('/loginverification', (req,res)=> {
    if (!req.body) return res.sendStatus(400)
  var email = req.body.user.email;
  var email = req.body.user.password;
    
})
app.listen(3000);