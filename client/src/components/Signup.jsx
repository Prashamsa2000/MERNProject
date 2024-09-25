import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import bg from '../assets/bg.jpg'
//import signup from '../assets/signup.jpg'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log('this is response ',json);
        if(json) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken); 
            navigate("/login");
            props.showAlert('Account created successfully !', 'success')

        }
        else {
            props.showAlert('Invalid Credentials !', 'danger')
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="background" 
        style={{
         
         width:'100%' ,
         height:'100vh',
          backgroundImage: `url(${bg})`, 
          backgroundSize: "cover", 
          display:'flex',
         
          backgroundPosition: "center", 
          padding: "20px", 
          
          
        }}>
        <div className="card-body">
    
  
      
        <div className="card" style={{
        marginTop: "0", 
        marginLeft: "50%", 
        marginBottom:"5%",
        maxWidth: "400px", 
        height:'530px',
        backgroundColor:"white",
        padding:'20px 60px'
       
      }} >
       
                
                        
                <h2 className='service-heading my-3 text-center' style={{fontFamily:'monospace'}}>Sign Up</h2><br></br>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 signup-form">
                            <i className="fa fa-user"></i>
                            <input type="text" className="form-control login-form" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" placeholder='Name' />

                        </div>
                        <div className="mb-3 signup-form">
                            <i className="fa fa-envelope"></i>
                            <input type="email" className="form-control login-form" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder='Email' />

                        </div>
                        <div className="mb-3 signup-form">
                            <i className="fa fa-key"></i>
                            <input type="password" className="form-control login-form" value={credentials.password} onChange={onChange} name="password" id="password" minLength={5} required placeholder='Password' />
                        </div>
                        <div className="mb-3 signup-form">
                            <i className="fa fa-key"></i>
                            <input type="password" className="form-control login-form" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" minLength={5} required placeholder='Confirm Password' />
                        </div>
                        <div className='text-center'>
                        <button type="submit" style={{marginTop:'10%', marginBottom:'20%',padding:'10px 10px', width:'60%'}} className="login-button btn btn-dark">Register</button>
                        
                        </div>
                        <div className='text-center'>
                        <p >Already have an account ?<Link to="/login" style={{marginLeft:'5px'}}>Login</Link>  </p>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
    )
}

export default Signup




//addproduct
//cartitems
//editproductmodel
//login
//menu
//navbar
//reduce
//serviceitem
//blogcontext
//blogstate
//reducers
//app



//fetchuser
//routes both