
import React, { useContext, useEffect, useState } from 'react';
//import coffee from '../assets/coffee.jpg';
import blogContext from '../context/blogs/BlogContext';
import { PiDotsThree } from "react-icons/pi";
import EditProductModel from './EditProductModel';

const Serviceitems = () => {
  const context = useContext(blogContext);
  const { state: { cart, products }, dispatch, allProduct ,product } = context;

const[menuVisible,setmenuVisible]=useState(false)
const[modelVisible,setmodelVisible]=useState(false)


  const toggleMenu=()=>{
setmenuVisible(!menuVisible)
  }
  const openEditModel=()=>{
    setmodelVisible(true)
      }
      const closeModel=()=>{
        setmodelVisible(false)
          }

const saveedit=(updateData)=>{
editProduct(_id,updateData)
closeModel()
}




  useEffect(() => {
    allProduct();  
   
  }, []);  



  

  return (
    <div className='container'>
     
      <h4 className='service-heading my-3'>Our Products</h4>
      <div className='row'>
        {product && product.map((e) => {
          return (
            <div className='col-md-3'>
              <div className="card" key={e._id}>
                <img src={`http://localhost:5000/uploads/${e.images[0]}`} className="card-img-top" alt={e.title} />
                <div className="card-body">
                  <div className='threedots'>
                  <h5 className="card-title">{e.title}</h5>
                 
                  <PiDotsThree onClick={toggleMenu}/>
                  {menuVisible && (
                    <div className='menu-options'>
                      <button onClick={openEditModel}>Edit</button>
                      <button onClick={()=>deleteWork(_id)}>Delete</button>
                    </div>
        )}
                    </div>
                   <p className="card-text">Rs. {e.price}</p>
                 
                  {cart && cart.some(p => p._id === e._id) ? (
                    <button
                      className='btn btn-danger'
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
                      className='btn btn-primary'
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
            </div>
          );
          {modelVisible && (
            <EditProductModel
            product={props.product}
            onClose={closeModel}
onsave={saveedit}
            />
          )}
        })}
      </div>
    </div>
  );
};

export default Serviceitems;