const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Posts extends Model {};

Posts.init(
    {
        id:{
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        post_title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date_posted:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Posts;