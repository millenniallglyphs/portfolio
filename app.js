var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var secure = require('ssl-express-www');
var app = express();

app.use(secure);

//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//index
app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Calvin | Product Design'
  });
});

//resume

//p5.jssketch
app.get('/sketch', (req, res) => {
  res.render('pages/sketch', {
    title: 'Calvin | sketch'
  });
});

//botnet
app.get('/botnet', (req, res) => {
  res.render('pages/botnet', {
    title: 'Calvin | Botnet'
  });
});

//botnet
app.get('/abacus', (req, res) => {
  res.render('pages/abacus', {
    title: 'Calvin | Abacus'
  });
});

//epiphyte
app.get('/epiphyte', (req, res) => {
  res.render('pages/epiphyte', {
    title: 'Calvin | Epiphyte'
  });
});

//bitclaims
app.get('/bitclaims', (req, res) => {
  res.render('pages/bitclaims', {
    title: 'Calvin | Bitclaims'
  });
});

app.use(express.static(__dirname + '/public'));


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.set('view engine', 'pug');
