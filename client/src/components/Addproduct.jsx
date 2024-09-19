import React, { useState } from 'react'
import axios from 'axios'

const Addproduct = (props) => {
const [product, setProduct]=useState({

title:"",
description:"",
price:"",
instock:"",
image:""

})

/* const imageupload=(e)=>{
setProduct({
...product, image:e.target.file[0]
})
} */

const handleSubmit=async(e)=>{
  e.preventDefault();
//console.log("okkkkkkk");
const formData=new FormData();
formData.append('title',product.title);
formData.append('description',product.description);
formData.append('price',product.price);
formData.append('instock',product.instock);
if(product.image){
    formData.append('myfile',product.image);
}

try {
    const response = await axios.post('http://localhost:5000/api/product/addproduct',formData,{
        headers:{"auth-token":localStorage.getItem('token')
        }
    });
console.log(response.data);


    //const data=await response
    props.showAlert("ptoducttttt data", "success");
    setProduct({
      title:"",
description:"",
price:"",
instock:"",
image:""
    });
    
} catch (error) {
  console.log(error);

  //const data=await response
  props.showAlert("no data", "danger");
}
};

const handleChange = (e)=>{
  if(e.target.type === "file"){
    setProduct({
      ...product, [e.target.name]:e.target.files[0]      
      
      });
    console.log("selected file",e.target.files[0]);
      }else{
        setProduct({ ...product, [e.target.name]: e.target.value });
      }
  };
    
  

  return (
    <div className='container'>
      <h4>add</h4>
      <form encType="multipart/form-data" onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" name='title' value={product.title} onChange={handleChange} ></input>
   
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description" name='description' value={product.description} onChange={handleChange} ></input>
   
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">price</label>
    <input type="number" className="form-control" id="price" name='price' value={product.price} onChange={handleChange}></input>
  </div>
  <div className="mb-3">
    <label htmlFor="instock" className="form-label">instock</label>
    <input type="number" className="form-control" id="instock" name='instock' value={product.instock} onChange={handleChange}></input>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="form-label">choose</label>
    <input type="file" className="form-control" name='image'multiple onChange={handleChange} id="image"></input>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Addproduct;
