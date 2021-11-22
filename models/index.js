const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

Users.hasMany(Posts, {
    foreignKey: 'user_id'
});

Posts.belongsTo(Users, {
    foreignKey: 'user_id'
});

Users.hasMany(Comments, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: 'author_id'
})


module.exports = { Users, Posts, Comments };


/*

the relationship I want to set up is this:
Each user can have multiple posts, but each post can only have one user,
each user can have multiple comments and each post can have multiple comments as well,
each comment can only have one user and can only be on one post at one time,
everytime a post is deleted a comment is deleted,
everytime a user is deleted the comment is deleted as well,

*/