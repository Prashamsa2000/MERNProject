import React, { useState } from "react";
//import { GoContainer } from "react-icons/go";
import { Link } from "react-router-dom";

const Login = () => {
  const [credential, setCredential] = useState({ email: "", password: "" })
  
  const handleSubmit=()=>{
    console.log("hllllooooooo");
    
  }
  const handleChange=(e)=>{
setCredential({...credential,[e.target.name]:e.target.value})
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control" value={credential.email} onChange={handleChange} name='email'
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          Submit
        </button>
      </form>
      <h6>Not register ?</h6>
      <Link className="nav-link" to="/signup">
        Signup
      </Link>
    </div>
  );
};

export default Login;
