
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
    allProduct()
    
} catch (error) {
    throw new Error('not updatee')
}
  }

const deleteProduct=async(id)=>{
    try {
        const response=await fetch(`http://localhost:5000/api/product/deleteproduct/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem('token')
            }
            
        })
        if(response.ok){
              console.log("deleteddddddd");
                allProduct()
        }
        else{
            console.error('not delete');
            
        }
    } catch (error) {
        console.error("Internal server error");
        
    }
}


    return (
        <blogContext.Provider  value={{state , dispatch,  allProduct ,product, setProduct, editProduct,deleteProduct}}>
            {props.children}
        </blogContext.Provider>
    )
}
export default BlogState

