const { response } = require('express');

const router = require('express').Router();

//get routes that will grab data and render it onto the page.

router.get('/', async(req,res)=>{
    try{
        res.render('home');
    }
    catch (err){
        res.status(500).json(err);
    }
});

router.get('/login', async(req,res)=>{
    try{
        res.render('login');
    }
    catch (err){
        res.status(500).json(err);
    }
});

router.get('/signup', async(req,res)=>{
    try{
        res.render('signup');
    }
    catch (err){
        res.status(500).json(err);
    }
});

router.get('/dashboard/:id', async(req,res)=>{
    try{
        res.render('dashboard');
    }
    catch (err){
        res.status(500).json(err);
    }
});

router.get('/createPost', async(req,res)=>{
    try{
        res.render('post');
    }
    catch (err){
        res.status(500).json(err);
    }
});

router.get('/comment', async(req,res)=>{
    try{
        res.render('comment');
    }
    catch (err){
        res.status(500).json(err);
    }
});




module.exports = router;