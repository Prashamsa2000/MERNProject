import React, { useState } from "react";
//import { GoContainer } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

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
        props.showAlert('Account created ', 'success')

    }
    else {
        props.showAlert('invalid credential', 'danger')
    }
}

  const handleChange=(e)=>{
setCredential({...credential,[e.target.name]:e.target.value})
  }
  
  return (
    <div className="container">
      
      <div className="card" style={{
        marginTop: "2%", 
        marginLeft: "50%", 
        marginBottom:"5%",
        maxWidth: "400px", 
        height:'530px',
        backgroundColor:"white",
        padding:'20px 60px'
       
      }} >
       
                
                        
                <h2 className='service-heading my-3 text-center' style={{fontFamily:'monospace'}}>Login</h2><br></br>
                   
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control" value={credential.email} onChange={handleChange} name='email'
            id="exampleInputEmail1"
            
          ></input>
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control" name="password" value={credential.password} onChange={handleChange} 
            id="exampleInputPassword1"
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
        <button type="submit" className="btn btn-primary">
        Login
        </button>
      </form>
      <h6>Don't have an account ?</h6>
      <Link className="nav-link" to="/signup">
        Signup
      </Link>
    </div>
    </div>
  );
};

export default Login;
