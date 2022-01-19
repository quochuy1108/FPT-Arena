var users = [
    {
        id:1,
        name:'Huy Nguyen'
    },
    {
        id:2,
        name:'Thanh Cong'
    },
    {
        id:3,
        name:'Anh Minh'
    },
]

var comments = [
    {
        id:1,
        user_id:1,
        content:'Ra clip di anh'
    },
    {
        id:2,
        user_id:2,
        content:'Thoi dung ra a oi'
    },
    {
        id:3,
        user_id:1,
        content:'Ra de'
    },
]

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}

function getUserByIds(userId){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userId.includes(user.id)
        })
        setTimeout(function(){
            resolve(result)   
        },1000)
       
    })
}


getComments()
    .then(function(comments){
        var userId = comments.map(function(comment){
            return comment.user_id                   
        })
       return getUserByIds(userId)
            .then(function(user){
            return {
                users : user,
                comments: comments
            }
            })
    })
    .then(function(data){
        var commentblock = document.getElementById('commentBlock')
        var html='';
        console.log(data);
        
        data.comments.forEach(function(comment){
           var user = data.users.find(function(user){
               return user.id === comment.user_id
           })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentblock.innerHTML = html
    })