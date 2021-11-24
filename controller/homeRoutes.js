const { Posts, Users } = require('../models');
const { findByPk } = require('../models/Users');

const router = require('express').Router();

//get routes that will grab data and render it onto the page.
router.get('/', async(req,res)=>{
    try{
        res.render('home');

        if (req.session.onDashbaord) {
            req.session.destroy(() => {
              res.status(204).end();
            });
          } 
    }
    catch (err){
        res.status(500).json(err);
    }
});

router.get('/login', async(req,res)=>{
    try{
        if (req.session.logged_in) {
            res.redirect('/');
            return;
          }
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
        const dashBoard = await Users.findByPk(req.params.id,{
            include: [
                {
                  model: Posts
                },
              ]
            });

        // req.session.save(() => {
        //     req.session.onDashbaord = true;
        //     res.status(200).json(dashBoard)
        // });
        const dashBoardData = dashBoard.get({ plain: true });

        res.render('dashboard', {
            dashBoardData,
            logged_in: true,
            onDashbaord: true
          });
    }
    catch (err){
        res.status(500).json(err);
    }
});

router.get('/createPost', async(req,res)=>{
    try{
        res.render('post', {
            newPost: req.body.status
        });
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