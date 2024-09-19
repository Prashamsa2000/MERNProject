import React from 'react'
import { useState } from 'react'
import bgimage from "../assets/bgimage_contact.jpg"


const ContactUs = () => {


    const [credential, setCredential] = useState({ firstName:"", lastName:"", email: "", country: "", message:"" })
  
  const handleSubmit=()=>{
    console.log("hllllooooooo");
    
  }
  const handleChange=(e)=>{
setCredential({...credential,[e.target.name]:e.target.value})
  }
  return (
   
     
  <div className="card-body">
    
  
      <div className="containerimage" 
      
      style={{
        marginTop: "5%", 
        marginLeft: "4%", 
        maxWidth: "1134px", 
        backgroundImage: `url(${bgimage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        padding: "20px", 
        
      }}>
        <div className="card" style={{
        marginTop: "5%", 
        marginLeft: "5%", 
        marginBottom:"5%",
        maxWidth: "500px", 
        backgroundColor:"white",
        padding: "30px 60px"
       
      }} >
      <h4 className='service-heading my-3 text-center' style={{fontFamily:"monospace", fontSize:"35px"}}>Contact Us</h4>
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
        <div className="form-group-1" style={{height:"130px"}}>
          <label htmlFor="exampleInputEmail1">Message</label>
          <input
            type="text"
            className="form-control6" style={{width:"100%",height:"100px"}} value={credential.message} onChange={handleChange} name='message'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          
        </div>
        <div className='text-center'>
        <button type="submit" className="btn btn--outline-light" style={{padding:"10px 35px", backgroundColor:"#988558", color:"white", marginTop:"10%"}}>
          Submit
        </button>
        </div>
      </form>
      
     </div>
    </div>
    </div>


  )
}

export default ContactUs
