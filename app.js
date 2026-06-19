// include Express
const express = require('express');

// server will listen on this port
const port = 3000;

// create instance of Express app
const app = express();

// 💡 CRITICAL: Load our user data file from the data folder
const userData = require('./data/test.json');

// 🧪 TEMP SANITY CHECK: Dump the array to the terminal console
console.log("--- DATA LOAD TEST ---");
console.log(userData[0]); // Prints just the very first user object
console.log("----------------------");

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

// ==========================================
// 👥 NEW ROUTE: The User Directory (The List)
// ==========================================
app.get('/users', (req, res) => {
    res.render('users/index', {
        title: 'User Directory',
        users: userData // Passes the 100-user array to the template
    });
});

// ==========================================
// 🔍 NEW ROUTE: Individual Profile (The View)
// ==========================================
app.get('/users/view/:id', (req, res) => {
    let id = parseInt(req.params.id);

    // We cheat elegantly by subtracting 1 to match array zero-indexing
    res.render('users/view', {
        title: 'User Profile',
        user: userData[id - 1]
    });
});

// set server to listen for requests
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});