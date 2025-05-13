const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
   
res.send(`<h1>Fetching all products</h1>`)
})
router.post('/',(req,res)=>{
   
res.send(`<h1>Adding a new product</h1>`)
})
router.get('/:userId',(req,res)=>{
   
res.send(`<h1>Fetching cart for user with ID: ${req.params.userId}</h1>`)
})

router.post('/:userId',(req,res)=>{
   
res.send(`<h1>Adding product to cart for user with ID: ${req.params.userId}</h1>`)
})


module.exports=router;