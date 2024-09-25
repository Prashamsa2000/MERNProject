
import React, { useContext, useEffect, useState } from 'react';
//import coffee from '../assets/coffee.jpg';
import blogContext from '../context/blogs/BlogContext';
import { PiDotsThree } from "react-icons/pi";
import EditProductModel from './EditProductModel';
//import { useNavigate } from 'react-router-dom';

const Serviceitems = () => {
  const context = useContext(blogContext);
  const { state: { cart}, dispatch, allProduct ,product , editProduct,deleteProduct} = context;

const[menuVisible,setmenuVisible]=useState({})
const[modelVisible,setmodelVisible]=useState(false)
const[selectedProduct,setselectedProduct]=useState(false)


//const navigate=useNavigate()


  const toggleMenu=(id)=>{

setmenuVisible((prevState)=>({
  ...prevState,
  [id]: !prevState[id],
}))
  }
  
  
  const openEditModel=(product)=>{
    setselectedProduct(product)
    setmodelVisible(true)
      }
      
  const closeModel=()=>{
            
        setmodelVisible(false)
        setselectedProduct(null)
          }

const saveedit=(updateData)=>{
editProduct(selectedProduct._id,updateData)
closeModel()
}
useEffect(() => {
  allProduct();
}, []);


const handleDelete=async(id)=>{
  await deleteProduct(id)

}

/* const viewmenuhandler = () => {
  navigate('/menu');
};

 */
const displayeditems = product ? product.slice(0, 4) : [];

  return (
    <div className='container'>
     <br></br><br></br><br></br><br></br>
      <h4 className='service-heading my-3 text-center' style={{fontFamily:"monospace", fontSize:"37px"}}>Todays' Special</h4>
      <br></br><br></br>
      <div className='row'>
        {displayeditems && displayeditems.map((e) => {
          return(
         
            <div className='col-md-3' key={e._id}>
              <div className="card" style={{ height: '90%', width: '100%', overflow: 'hidden' }}>
                                <img src={`http://localhost:5000/uploads/${e.images[0]}` } className="card-img-top" style={{height:"60%", width:"100%", objectFit:'cover'}} alt={e.title} />
                <div className="card-body">
                  <div className='threedots'>
                  <h5 className="card-title" style={{fontSize:'23px'}}>{e.title} </h5>
                 
                  <PiDotsThree onClick={()=>toggleMenu(e._id)}/>
                  {menuVisible[e._id] && (
                    <div className='menu-options'>
                      <button onClick={()=>openEditModel(e)}>Edit</button>
                      <button onClick={()=>handleDelete(e._id)}>Delete</button>
                    </div>
        )}
                    </div>
                   <p className="card-text">Rs. {e.price}</p>
                 
                  {cart && cart.some(p => p._id === e._id) ? (
                    <button
                      className='btn btn-outline-danger' 
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: e
                        });
                      }}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className='btn btn-outline-success' style={{marginTop:"15%"}}
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: e
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            
          
          {/*  
           {product && product.length > 4 && (
            <button className='btn btn-outline-secondary mt-3' onClick={viewmenuhandler}>
              View Menu
            </button>
          )} */}
          {modelVisible && selectedProduct && selectedProduct._id===e._id &&(
            <EditProductModel
           product={selectedProduct}
            onClose={closeModel}
       onsave={saveedit}
            />
          )}
            </div>
          );
        })}
      
      </div>
    </div>
  );
};

export default Serviceitems;