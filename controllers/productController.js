const service=require('../services/productService');

const getProducts=(req,res)=>{

res.send(`<h1>${service.fetchAllProducts()}</h1>`)
}
const getProductById=(req,res)=>{
res.send(`<h1>${service.fetchProductById(req)}</h1>`)
}
const postProduct=(req,res)=>{
res.send(`<h1>${service.addProduct()}</h1>`)
}

module.exports={
    getProducts,postProduct,getProductById
}