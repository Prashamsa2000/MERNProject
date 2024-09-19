import React from 'react';
import servi from '../assets/serviii.png';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div className="container">
      <div className="about-card p-4 rounded">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={servi} className="img-fluid rounded" alt="About Us" />
          </div>
          <div className="col-md-6">
            <h4 style={{color:"darkblue"}}>Our Services</h4>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias labore aperiam totam at omnis veritatis recusandae, neque ad officia odit rerum veniam autem dolor excepturi, harum delectus eveniet enim.
            </p>
            <Link to="/services">
            <button className="btn btn-outline-primary" >View More</button>
          
            </Link></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
