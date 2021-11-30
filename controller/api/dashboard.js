const router = require('express').Router();
const { Posts } = require('../../models');
const authentication = require('../../utils/authenticator');

//post put and delete routes for the users own posts.

router.post('/',authentication, async (req, res) => {
    try{
        const newPost = await Posts.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newPost)
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.put('/update/:id',authentication, async (req, res) => {
    try{
        const updatePost = await Posts.update( 
            { 
                post_title: req.body.title, 
                content: req.body.content 
            },
            {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(updatePost);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.delete('/delete/:id',authentication, async (req, res) => {
    try{
        const deletePost = await Posts.destroy({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(deletePost);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;