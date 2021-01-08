// imports
const express = require('express');

const app  = express();

const port = 3000

// Static Files
app.use(express.static('public'));
//app.use('/styles', express.static(__dirname + 'public/styles'));
//app.use('/scripts', express.static(__dirname + 'public/scripts'));
//app.use('/images', express.static(__dirname + 'public/images'));

// Set Views
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routes
const homeRouter = require('./src/routes/home');

app.use('/', homeRouter);

/*app.get('', (req, res) => {
    //res.sendFile(__dirname + '/views/home.html');
    res.render('home', {text: 'Test a variable'});
})

app.get('/about', (req, res) => {
    res.render('about', {text: 'About page'});
})
*/

app.get('*', (req, res) => {
    res.send("Error! Page not found");
});

app.listen(port, () => {
    console.info(`Listening on port ${port}`);
});