const express = require('express');
const session = require('express-session');
const xpresHbars = require('express-handlebars');
// const routes = require('./controller');
const handlebars = xpresHbars.create({});

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const info = {
    secret: 'seecy secret',
    cookie:{},
    resave : false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db:sequelize
    })
};

app.use(session(info));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controller/'));

// app.use(routes);

// sequelize.sync({force:false}).then(()=>{
//     app.listen(PORT, () => console.log(`Now listening at port http://localhost:${PORT}`))
// });


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });