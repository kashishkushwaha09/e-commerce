const express=require('express');
const server=express();
const port=4200;
const userRouter=require('./routes/user');
const productRouter=require('./routes/product');
const cartRouter=require('./routes/cart');

server.use('/users',userRouter);
server.use('/products',productRouter);
server.use('/cart',cartRouter);

server.use((req,res)=>{
    res.status(404).send('<h1>404- Page Not Found!</h1>');
})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})