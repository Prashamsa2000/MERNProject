import React from 'react';
import servi from '../assets/serviii.jpg';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div className="container-fluid p-0">
    <div className="about-card p-5" style={{ backgroundColor: '#e3f2fd', marginTop:"78px", marginLeft:"0px" }}>
      <div className="row align-items">
        
        <div className="col-md-6">
        
          <h4 style={{color:"darkblue", fontSize:"35px", fontFamily:"monospace"}}>Our Services</h4>
          <br></br><br></br>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias labore aperiam totam at omnis veritatis recusandae, neque ad officia odit rerum veniam autem dolor excepturi, harum delectus eveniet enim.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque, laboriosam accusamus et officiis, quis sint, unde deserunt fugit tempore maiores eveniet architecto non aspernatur optio sit recusandae asperiores facilis.</p>
          
          <Link to="/about">
          <button className="btn btn-outline-dark" style={{marginTop:"4%",padding:"10px 35px"}} >View More</button>
          
          </Link></div>
          <div className="col-md-6 mb-4 mb-md-0">
          <img src={servi} className="img-fluid rounded" alt="About Us" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Services;
