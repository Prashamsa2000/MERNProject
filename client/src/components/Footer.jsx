import React from 'react';
import { Link } from 'react-router-dom';
import { MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="card-footer" style={{marginTop:"7%", marginBottom:"0%",backgroundColor:"#222222"}}>
            <div className="container">
                <div className="row">
                
                <div className="col-md-3 text-light"style={{marginTop:'3%' ,marginLeft:'5%'}} >
                        
                        <h5 className="text-light" >Our Mission</h5>
                        <br></br>
                        <p>Lorem ipsum, dolor sit amet es minus explicabo qui repellendus, laborum tempora impedit quia minima praesentium quisquam, amet sapiente.</p>
                    </div>
                    
                    <div className="col-md-3 text-light" style={{marginTop:'3%' ,marginLeft:'12%'}}  >
                        
                        <h5 className="text-light"  >Quick Links</h5>
                        <br></br>
                        <Link to="/about" className="text-light" style={{textDecoration:"none"}}>About Us</Link><br></br>
                        <Link className="text-light" to="/services" style={{textDecoration:"none"}}>Our Services</Link><br></br>
                        <Link to="/menu" className="text-light" style={{textDecoration:"none"}}>Menu</Link><br></br>
                        <Link className="text-light" to="/contactus" style={{textDecoration:"none"}}>Contact Us</Link>
                    </div>
                    
                    
                    <div className="col-md-3 text-light" style={{marginTop:'3%' ,marginLeft:'6%'}}>
                        
                        <h5 className="text-light" >Get In Touch With Us</h5>
                        <br></br>
                        <div className="d-flex align-items-center">
                        <MdPlace /><h6 className="text-light" style={{marginLeft:"3%", fontWeight:'normal'}}>Patan, Lalitpur</h6>
                        </div>
                        <div className="d-flex align-items-center">
                        <FaPhone/><h6 style={{marginLeft:"3%", fontWeight:'normal'}}>93883788</h6>
                        </div>
                        <div className="d-flex align-items-center">
                        <MdOutlineEmail /><h6 style={{marginLeft:"3%", fontWeight:'normal'}}>hello123@gmail.com</h6>
                        </div>
                        <div className="d-flex align-items-center">
                        <br></br><br></br><br></br>
                        <FaFacebook /><h6 style={{marginLeft:"3%", fontWeight:'normal'}}></h6>
                        <FaInstagram /><h6 style={{marginLeft:"3%", fontWeight:'normal'}}></h6>
                        </div>
                       
                        
                        
                    </div>
                    
                </div>
                <p className='text-light text-center mt-4' >&copy; Restaurant. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
