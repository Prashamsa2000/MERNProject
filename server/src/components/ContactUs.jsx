import React from 'react'
import { useState } from 'react'

const ContactUs = () => {


    const [credential, setCredential] = useState({ firstName:"", lastName:"", email: "", country: "", message:"" })
  
  const handleSubmit=()=>{
    console.log("hllllooooooo");
    
  }
  const handleChange=(e)=>{
setCredential({...credential,[e.target.name]:e.target.value})
  }
  return (
   
      <div className="card">
  <div className="card-body">
    
  
      <div className="container">
      <h4 className='service-heading my-3'>Contact Us</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input
            type="email"
            className="form-control" value={credential.name} onChange={handleChange} name='firstName'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input
            type="email"
            className="form-control" value={credential.name} onChange={handleChange} name='lastName'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control" value={credential.name} onChange={handleChange} name='email'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Country</label>
          <input
            type="email"
            className="form-control" value={credential.name} onChange={handleChange} name='country'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Message</label>
          <input
            type="email"
            className="form-control" value={credential.name} onChange={handleChange} name='message'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          
        </div>
        
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      
     
    </div>
    </div>
    </div>


  )
}

export default ContactUs
