import React from 'react'
import { IoHappyOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineLocalDining } from "react-icons/md";

const Track = () => {
  return (
   <div className='container text-center'>
       <div className='row'>
       <div className='col'>
      <IoHappyOutline style={{ color: '#1D2951', fontSize: '99px', marginTop:"23%", marginLeft:'0' }} />
      <h2 className="text-dark">200+ </h2>
      
      <h6 className="text-muted">Happy Customers</h6>
      </div>
      <div className='col'>
      <TbTruckDelivery style={{ color: '#1D2951', fontSize: '99px', marginTop:"23%", marginLeft:'0' }}/>
      <h4 className="text-dark">Fast Delivery </h4>
      <h6 className="text-muted">To Your Doorstep</h6>
      </div>
      <div className='col'>
      <MdOutlineLocalDining style={{ color: '#1D2951', fontSize: '99px', marginTop:"23%", marginLeft:'0' }}/>
     
      <h4 className="text-dark">Fine Dining Space</h4>
      
      <h6 className="text-muted">Great Ambiance</h6>
       </div>
      
      </div>
      </div>
  )
}

export default Track

