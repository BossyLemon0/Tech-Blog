const router = require('express').Router();
const { Users } = require('../../models');

//login routes
// /, /login, and /logout

router.post('/', async (req,res) => {
    try{
        const usersData = await Users.create(req.body);

        //creates and sets the seession variables when this route is hit
        //if route fails it will throw an error
        req.session.save(() => {
            req.session.user_id = usersData.isSoftDeleted;
            req.session.logged_in = true;
            res.status(200).json(usersData)
        })
    }
    catch(err){
        res.status(400).json(err)
    }
})
router.post('/login', async (req,res) =>{
    try{

    }
    catch{
        
    }
})
router.post('logout', async (req,res) =>{
    try{

    }
    catch{
        
    }
})



module.exports = router;