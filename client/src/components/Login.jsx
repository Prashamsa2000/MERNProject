import React, { useState } from "react";
//import { GoContainer } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import Signup from '../assets/signup.jpg'

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" })
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credential
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },



        
        body: JSON.stringify({ email, password })
    });
    const json = await response.json()
    console.log('this is response ',json);
    if(json) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authToken); 
        navigate("/");
        props.showAlert('Logged In Successfully !', 'success')
        

    }
    else {
        props.showAlert('Invalid Credentials !', 'danger')
    }
}

  const handleChange=(e)=>{
setCredential({...credential,[e.target.name]:e.target.value})
  }
  
  return (
    <div className="container mt-5">
       <div className="row justify-content-center">
       <div className="col-md-6 col-lg-10">
    
      <div className="card">
         <div className='row no-gutters'>
          <div className="col-md-6 d-none d-md-block">
       
     
        
                <img className="card-img" style={{height:"500px", objectFit:'cover'}} src={Signup}></img></div>
            
             <div className="col-md-6">     
              <div className="card-body">    
                <h2 className='card-title text-center' style={{fontFamily:'monospace'}}>Login</h2><br></br><br></br>
                   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <input
            type="email"
            className="form-control my-3" value={credential.email} onChange={handleChange} name='email'
            id="exampleInputEmail1" placeholder='Email'
            
          ></input>
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          
          <input
            type="password"
            className="form-control my-3" name="password" value={credential.password} onChange={handleChange} 
            id="exampleInputPassword1" placeholder='Password'
          ></input>
        </div>
        {/* <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <div className="text-center">
        <button type="submit" className="btn btn-outline-primary" style={{marginTop:'70px', marginBottom:'40px',width:'100%'}}>
     
        Login
        </button>
        </div>
      </form>
    
      <p className="text-center" style={{marginTop:'60px'}}>Don't have an account ?<Link to="/signup " style={{marginLeft:'5px'}}>
        Sign Up
      </Link></p>
      </div>
       </div>
       </div> 
       </div>
    
       </div>
    </div>
    </div>
  );
};

export default Login;
