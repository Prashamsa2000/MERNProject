
import { useReducer, useState } from "react";
import blogContext from "./BlogContext";
import { cartReducer } from "../Reducers";

const BlogState = (props) => {

    const [product, setProduct] = useState([])
    const [state, dispatch] =useReducer(cartReducer, 
        {
            products: product,
            cart:[]
        }
    )
  
     console.log("this is our product from backend",product);

  const allProduct = async()=>{
    const  response= await  fetch("http://localhost:5000/api/product/getallproduct",{
        method : "GET",
        headers:{
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        }
    })
    let parseData= await response.json()
    console.log(parseData);
    setProduct(parseData)
  }
      


  const editProduct=async(selectedProduct,updateData)=>{
console.log("editinggggg", selectedProduct);
const{title,description, price, instock}=updateData
try {
    const response=await fetch(`http://localhost:5000/api/product/updateproduct/${selectedProduct}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({title, description, instock, price})
    })
    if(!response.ok){
        throw new Error('not updatee')
    }
    const json=await response.json()
    console.log("updatedddd");
    
} catch (error) {
    throw new Error('not updatee')
}
  }




    return (
        <blogContext.Provider  value={{state , dispatch,  allProduct ,product, setProduct, editProduct}}>
            {props.children}
        </blogContext.Provider>
    )
}
export default BlogState

