const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.set('view engine', 'pug');

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

app.get('/epiphyte', (req, res) => {
  res.render('pages/epiphyte', {
    title: 'Calvin | Epiphyte'
  });
});



app.use(express.static(__dirname + '/public'));
