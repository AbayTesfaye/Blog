const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
require('dotenv').config(); // Load environment variables

// Express app
const app = express();

// Validate environment variables
const dbURI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(dbURI)
    .then(() => app.listen(3000, () => console.log('Server is running on port 3000')))
    .catch((err) => console.error('Database connection failed:', err));

// Set ejs as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));

// Serve static files
app.use(express.static('public'));
// Parse form data
app.use(express.urlencoded({ extended: true }));


// add blogs

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog 2',
        snippet: 'About my new blog',
        body: 'More about my new blog'
    });

    blog.save()
        .then((result) => res.send(result))
        .catch((err) => console.error(err));
});

// get all blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => res.send(result))
        .catch((err) => console.error(err));
});

// get single blog
app.get('/single-blog', (req, res) => {
    Blog.findById('679146e8559e8f965da69d68')
        .then((result) => res.send(result))
        .catch((err) => console.error(err));
});


// Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Blog routes
app.get('/blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.render('index',{title: 'All Blogs', blogs:result})
    })
    .catch()
})

app.post('/blogs',(req,res)=>{
   // save data to database
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs');
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/blogs/:id',(req,res)=>{    
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blog:result,title:'Blog Details'})
    })
    .catch((err)=>{
        console.log(err);
    }) 
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
