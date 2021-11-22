const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

Users.hasMany(Posts, {

});

Posts.belongsTo(Users, {
    
});

Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {

})

module.exports = { Users, Posts, Comments };