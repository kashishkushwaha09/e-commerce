const express=require('express');
const router=express.Router();
const {getCartItems,postCart}=require('../controllers/cartController');
router.get('/:userId',getCartItems)

router.post('/:userId',postCart)


module.exports=router;