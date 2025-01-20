const express = require('express');
const app = express();

// Listen for requests
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

// Serve the about.html file
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// Redirect to the about page
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

