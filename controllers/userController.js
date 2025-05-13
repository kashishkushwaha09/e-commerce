
const getUsers=(req,res)=>{
res.send(`<h1>Fetching all users</h1>`)
}
const postUser=(req,res)=>{
res.send(`<h1>Adding a new user</h1>`)
}
const getUserById=(req,res)=>{
res.send(`<h1>Fetching user with ID: ${req.params.id}</h1>`)
}
module.exports={
    getUsers,postUser,getUserById
}