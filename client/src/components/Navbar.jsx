import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import blogContext from '../context/blogs/BlogContext';
import logo from '../assets/logo.png';

const Navbar = (props) => {
    const context= useContext(blogContext)
     const {state:{cart}}= context
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary bg-dark">
  <div className="container-fluid">
  <img src={logo} width="67" height="50"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    

    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
                        <li className="nav-item ">
                            <Link className="nav-link active text-light " aria-current="page" to="/">Home</Link>
                        </li>
                       {/*  <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/blogs">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/services">Our Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/contactus">Contact Us</Link>
                        </li>
                        <li className="nav-item d-flex flex-lg-row flex-column align-items-lg-center">
                        <Link to="./Signup"><button type="button" className="btn btn-outline-light my-2 my-lg-0 mx-lg-2">
                            Sign Up
                            
                        </button>
                        </Link>
                        
                        
                        <Link to="./Login"><button type="button" className="btn btn-outline-light my-2 my-lg-0 mx-lg-2">
                            Login
                            
                        </button>
                        
                        </Link>
                       
                        <Link to="./cartitems"><button type="button" className="btn btn-light position-relative my-2 my-lg-0 mx-lg-2">
                            My Cart<FaShoppingCart className='ms-2'/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        </Link>
</li>
                    </ul>

    </div>
  </div>
</nav>
    )
}

export default Navbar
