import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import bg from '../assets/bg.jpg'
import signup from '../assets/signup.jpg'

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
       
        <div className='container my-5'>
            <div className='row justify-content-end'>
          
                <div className='col-md-6'>
                    
                    <div className='card-body d-flex flex-row' style={{backgroundColor:'white'}} >


                        <div style={{backgroundColor:'red'}}></div>
                <h2 className='card-title' style={{fontFamily:'monospace'}}>Join Us Now !</h2>
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

                        <button type="submit" className="login-button btn btn-success">Submit</button>
                        <p>Already have an account ?<Link to="/login">Login.</Link>  </p>
                    </form>
                    </div>
                </div>
                </div>
                
          
        </div>

    )
}

export default Signup




