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
      sequelize,
      timestamps:false,
      freezeTableName:true,
      underscored: true,
      modelName: 'user',
      }
  );

  module.exports = Users;