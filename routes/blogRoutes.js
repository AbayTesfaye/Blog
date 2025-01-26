const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

// Blog routes

// GET all blogs
router.get('/blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
        console.log(err);
    });
});

// POST to create a new blog
router.post('/blogs', (req, res) => {
   const blog = new Blog(req.body);
   blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    });
});

// GET blog details by id
router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
        console.log(err);
    });
});

// DELETE blog by id
router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
        console.log(err);
    });
});

// GET create new blog form
router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

module.exports = router;
