const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Users extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

  Users.init(
      {
        id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [2,20],
            },
          },
      },
      {
        // this hook hashes the password before it's put into the database.
        //I'm leaving out the before update hook that does the same because from 
        //my understanding is that before update incenuates that I will be updating the password
        //and for now I won't have a feauture to change the password if you forget it.
        hooks:{
          beforeCreate: async (newUser) => {
            newUser.password = await bycrypt.hash(newUser.password, 10);
            return newUser
          }
        },
      sequelize,
      timestamps:false,
      freezeTableName:true,
      underscored: true,
      modelName: 'user',
      }
  );

  module.exports = Users;