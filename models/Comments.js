const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {};

Comments.init(
    {
        comment_id:{
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        post_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'post',
              key: 'id',
            },
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_posted:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comments;