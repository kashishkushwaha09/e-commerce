const service=require('../services/productService');
const path=require('path');
const getProducts=(req,res)=>{
   res.sendFile(path.join(__dirname,'..','views','product.html'));
// res.send(`<h1>${service.fetchAllProducts()}</h1>`)
}
const getProductById=(req,res)=>{
res.send(`<h1>${service.fetchProductById(req)}</h1>`)
}
const postProduct=(req,res)=>{
// res.send(`<h1>${service.addProduct()}</h1>`)
res.json({value:req.body.productName});  
}

module.exports={
    getProducts,postProduct,getProductById
}