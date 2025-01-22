const express = require('express');
const app = express();
const morgan = require('morgan');

// Set ejs as the view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Middleware
app.use(morgan('dev'));

// Serve static files
app.use(express.static('public'));


// Serve the index.ejs file
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title: 'Home', blogs});
});

// Serve the about.ejs file
app.get('/about', (req, res) => {
    res.render('about',{title: 'About'});
});

// Redirect to the about page
app.get('/blogs/create', (req, res) => {
    res.render('create',{title: 'Create'}); // Assuming you want to render the 'about.ejs' file here
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('404',{title: '404'}); // Ensure the 404 file exists in your views folder
});

