var createbtn= document.querySelector('');
var deletebtn = document.querySelector('');
var updatebtn = document.querySelector('');


//send the current id in the update route

updatebtn.addEventListener('submit', updatePost);
deletebtn.addEventListener('submit', deletePost)
createbtn.addEventListener('submit', createPost)