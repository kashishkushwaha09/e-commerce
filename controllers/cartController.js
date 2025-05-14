const { sendResponse, sendErrorResponse } = require("../utils/response");

const getCartItems=(req,res)=>{
    try {
        const id=req.params.userId;
        if(id>10){
            let err=new Error('Cart Item not found');
            err.statusCode=404;
        }
        return sendResponse(res,`Fetching cart for user with ID: ${req.params.userId}`,200);
    } catch (error) {
        return sendErrorResponse(res,error);
    }
// res.send(`<h1>Fetching cart for user with ID: ${req.params.userId}</h1>`)
}
const postCart=(req,res)=>{
     try {
        const id=req.params.userId;
        if(id>10){
            let err=new Error('Cart Item not found');
            err.statusCode=404;
        }
        return sendResponse(res,`Adding product to cart for user with ID: ${req.params.userId}`,200);
    } catch (error) {
        return sendErrorResponse(res,error);
    }
// res.send(`<h1>Adding product to cart for user with ID: ${req.params.userId}</h1>`)
}

module.exports={
    getCartItems,postCart
}