const express=require('express');
const router=express.Router();
const {getProducts,getProductById,postProduct}=require('../controllers/productController');
router.get('/',getProducts)
router.post('/',postProduct)
router.get('/:id',getProductById)



module.exports=router;