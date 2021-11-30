const router = require('express').Router();
const { Posts, Users } = require('../models');



//get routes that will grab data and render it onto the page.
router.get('/', async(req,res)=>{
    try{
        if (req.session.onDashbaord) {
            req.session.onDashbaord = false;
          } 
          res.render('home');
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

        if (req.session.logged_in) {
            res.redirect('/');
            return;
          }
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
            console.log(dashBoard)
        req.session.save(() => {
            req.session.onDashbaord = true;
            res.status(200).json(dashBoard)
        });
        const dashBoardData = dashBoard.get({ plain: true });

        res.render('dashboard', {
            dashBoardData,
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

router.get('/comment/:id', async(req,res)=>{
    try{
        const Post = await Posts.findOne(
            {where: {id: req.params.id }},
            );
        const commentData = Post.get({ plain: true });

        res.render('comment',{
        commentData,
    });
    }
    catch(err){
        res.status(500).json(err);
    }
});




module.exports = router;