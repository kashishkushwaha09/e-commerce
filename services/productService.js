const fetchAllProducts=()=>{
    return 'Fetching all products';
}
const addProduct=()=>{
    return 'Adding a new product';
}
const fetchProductById=(req)=>{
    return `Fetching product with ID: ${req.params.id}`
}
module.exports={
    fetchAllProducts,addProduct,fetchProductById
}