const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Xalgorithms'
  });
});

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
