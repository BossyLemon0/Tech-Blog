const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const routes = require('./controller');

const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

const info = {
    secret: 'seecy secret',
    cookie:{},
    resace : false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
};

app.use(session(info));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=> 
    console.log(`Now listening at port http://localhost:${PORT}`))
})