const { sendErrorResponse, sendResponse } = require("../utils/response")

const getUsers=(req,res)=>{
    try {
        return sendResponse(res,'Fetching all users',200);
    } catch (error) {
        error.statusCode=500;
        return sendErrorResponse(res,error);
    }
// res.send(`<h1>Fetching all users</h1>`)
}
const postUser=(req,res)=>{
     try {
        return sendResponse(res,'Adding a new user',201);
    } catch (error) {
        error.statusCode=500;
        return sendErrorResponse(res,error);
    }
// res.send(`<h1>Adding a new user</h1>`)
}
const getUserById=(req,res)=>{
    try {
         const userId=req.params.id;
    if(userId>10){
        let err=new Error("User not Found");
        err.statusCode=404;
        throw err;
        // return sendErrorResponse(res,{message:"User not Found",statusCode:404})
    }
    let data=`Fetching user with ID: ${userId}`;
    return sendResponse(res,data,200);
    } catch (error) {
        return sendErrorResponse(res,error);
    }
   
// res.send(`<h1>Fetching user with ID: ${req.params.id}</h1>`)
}
module.exports={
    getUsers,postUser,getUserById
}