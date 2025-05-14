const service=require('../services/productService');
const path=require('path');
const { sendErrorResponse, sendResponse } = require('../utils/response');
const getProducts=(req,res)=>{
    try {
        res.sendFile(path.join(__dirname,'..','views','product.html'));
    } catch (error) {
        error.statusCode=500;
        return sendErrorResponse(res,error);
    }
   
// res.send(`<h1>${service.fetchAllProducts()}</h1>`)
}
const getProductById=(req,res)=>{
    try {
        let data=service.fetchProductById(req);
        if(!data){
            let err=new Error('Product not found');
            err.statusCode=404;
            throw err;
        }
        return sendResponse(res,data,200);
    } catch (error) {
        return sendErrorResponse(res,error);
    }
// res.send(`<h1>${service.fetchProductById(req)}</h1>`)
}
const postProduct=(req,res)=>{
// res.send(`<h1>${service.addProduct()}</h1>`)
try {
    if(!req.body){
        let err=new Error('Product is not created');
        err.statusCode=500;
        throw err;
    }
    return sendResponse(res,req.body.productName,201)
} catch (error) {
    return sendErrorResponse(res,error);
}
// res.json({value:req.body.productName});  
}

module.exports={
    getProducts,postProduct,getProductById
}