const express=require('express');
const router=express.Router();
const {getProducts,getProductById,postProduct}=require('../controllers/productController');
router.get('/',getProducts)
router.post('/',getProductById)
router.get('/:id',postProduct)



module.exports=router;