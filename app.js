// include Express
const express = require('express');

// server will listen on this port
const port = 3000;

// create instance of Express app
const app = express();

// ejs is templating engine
app.set('view engine', 'ejs');

// this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname + '/public'));

// home URL
app.get('/', (req, res) => {
    let title = "Solar System Home";
    res.render('pages/index', { title: title });
});

// about URL
app.get('/about', (req, res) => {
    let title = "About This Website";
    res.render('pages/about', { title: title });
});

// inner planets URL
app.get('/inner-planets', (req, res) => {
    let title = "Inner Planets";
    res.render('pages/inner-planets', { title: title });
});

// outer planets URL
app.get('/outer-planets', (req, res) => {
    let title = "Outer Planets";
    res.render('pages/outer-planets', { title: title });
});

// set server to listen for requests
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});