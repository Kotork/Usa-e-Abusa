// imports
const express = require('express');

const app  = express();

const PORT = process.env.PORT || 3000

// Middleware to serve Static Files
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

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});