import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import blogContext from '../context/blogs/BlogContext';
import logo from '../assets/logo.png';
import Search from './Search';
import { Navigate } from 'react-router-dom';

const Navbar = (props) => {
    const context= useContext(blogContext)
     const {state:{cart},product}= context
     console.log("this usj our searfcvhhhh");
     


     const [title,setTitle]=useState('')
     const [results, setResults]=useState([])
     const[modelVisible, setmodelVisible]=useState(false)



     useEffect(()=>{
        const filteredProducts=product?.filter(prod =>
            title? prod.title.toLowerCase()===title.toLowerCase():true
        )



        setResults(filteredProducts)
        console.log("ok filter", filteredProducts);
        

     },[title, product])

     const handleTitleChange=(e)=>{
setTitle(e.target.value)

     }


     const openModel=(e)=>{
        e.preventDefault()
        setmodelVisible(true)
     }
const closeModel=()=>{
setmodelVisible(false)

}
const handleLogout = ()=>{
    localStorage.removeItem('token')
    Navigate('/login')

  }

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
                            <Link className="nav-link text-light" to="/menu">Menu</Link>
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
                        </li>
                        <li className="nav-item">
                       
                        <Link to="./Login"><button type="button" className="btn btn-outline-light my-2 my-lg-0 mx-lg-2">
                            Login
                            
                        </button>
                        
                        </Link>
                       </li>

                     {/*   {localStorage.getItem('token') ?
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleLogout} to="#">Logout</Link>
                            </li> : <li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>}

 */}

                      
                        <li className="nav-item dropdown ">
  <button className="btn btn-outline-light dropdown-toggle ms-2 my-2 my-lg-0 mx-lg-2" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Profiles
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
   
    <Link className="dropdown-item" to="/profile/user1">user1</Link>
    <Link className="dropdown-item" to="/profile/user2">user2</Link>
   
  </ul>
</li>



<Link to="./cartitems"><button type="button" className="btn btn-light position-relative my-2 my-lg-0 mx-lg-2">
                            My Cart<FaShoppingCart className='ms-2'/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        </Link>
                        <form className="d-flex" onSubmit={openModel}>
    <input className="form-control mr-sm-2" type="search" name='title' value={title}onChange={handleTitleChange} placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={openModel} type="submit">Search</button>
  </form>
 { modelVisible && (<Search results={results} onClose={closeModel}/>)}
                  
                    
                    </ul>

    </div>
  </div>
</nav>
    )
}

export default Navbar
