const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//if server is running on another platform rather than
//localhost than the sequelize will use the environment 
//variables in that platform rather than the one in dotenv
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;