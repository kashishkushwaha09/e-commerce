const getProducts=(req,res)=>{
res.send(`<h1>Fetching all products</h1>`)
}
const postProduct=(req,res)=>{
res.send(`<h1>Adding a new product</h1>`)
}
const getProductById=(req,res)=>{
res.send(`<h1>Fetching product with ID: ${req.params.id}</h1>`)
}
module.exports={
    getProducts,postProduct,getProductById
}