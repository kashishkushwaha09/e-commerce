
const onSubmitHandler=(e)=>{
e.preventDefault();
console.log("form submitted");
const product=e.target.productName.value;
const obj={
    "productName":product
}
axios.post('http://localhost:4200'+'/products',obj)
.then((result)=>{
    console.log(result.data);
})
}