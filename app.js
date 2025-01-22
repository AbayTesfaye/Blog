const express = require('express');
const app = express();

// Set ejs as the view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Serve the index.ejs file
app.get('/', (req, res) => {
    res.render('index');
});

// Serve the about.ejs file
app.get('/about', (req, res) => {
    res.render('about');
});

// Redirect to the about page
app.get('/about-us', (req, res) => {
    res.render('about'); // Assuming you want to render the 'about.ejs' file here
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('404'); // Ensure the 404 file exists in your views folder
});

