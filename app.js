const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 15000;
app.use(express.static('public'));
//views middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.listen(port);
module.exports = app;

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/video1', (req, res) => {
    res.render('video1');
});
app.get('/video2', (req, res) => {
    res.render('video2');
});
app.get('/video3', (req, res) => {
    res.render('video3');
});
