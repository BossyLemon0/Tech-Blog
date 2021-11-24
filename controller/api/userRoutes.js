const router = require('express').Router();
const { Users } = require('../../models');

//login routes
// /, /login, and /logout

router.post('/', async (req,res) => {
    try{
        const newUsersData = await Users.create(req.body);

        //creates and sets the seession variables when this route is hit
        //if route fails it will throw an error
        req.session.save(() => {
            req.session.user_id = newUsersData.id;
            req.session.logged_in = true;
            res.status(200).json(newUsersData)
        })
    }
    catch(err){
        res.status(400).json(err)
    }
})
router.post('/login', async (req,res) =>{
    try{
        //in the front end we have to pass username and password
        const userInfo = await Users.findOne({ where: {username: req.body.username}});
        if(!userLogin){
            res.status(400).json({ message: 'Incorrect Username, please try again' });
          return;
        }
        //we have to hash the password somewhere along the way.
        const userPassword = await userInfo.checkPassword(req.body.userPassword)
        if(!userPassword){
            res.status(400).json({ message: 'Incorrect Password, please try again' });
          return;
        }

        req.session.save(() => {
            req.session.user_id = userInfo.id;
            req.session.logged_in = true;
            
            res.json({ user: userInfo, message: 'Logged in' });
          });

    }
    catch(err){
        res.status(400).json(err)
    }
})
router.post('logout', async (req,res) =>{
    try{

    }
    catch{
        
    }
})



module.exports = router;