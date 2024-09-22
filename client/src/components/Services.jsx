import React from 'react';
import servi from '../assets/serviii.jpg';
import { Link } from 'react-router-dom';
import { PiChefHatLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiGlassCelebration } from "react-icons/gi";

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
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias labore aperiam totam at omnis veritatis recusandae, neque ad officia odit rerum veniam autem dolor excepturi, harum delectus eveniet enim.
          </p>
          </div>
          <div className="col-md-6 mb-0 mb-md-0">
          <img src={servi} className="img-fluid rounded" style={{width:"100%", height:"90%", objectFit:"cover"}} />
        </div>
        
        
      </div>
      <div className="row mt-0">
         
          <div className="col-md-4">
            <div className="card mb-0 card mt-0" style={{backgroundColor:"#FAF8F6"}}>
              <PiChefHatLight className="card-img-top" alt="Service 1" style={{marginLeft:"37%",width:"25%",height:"25%", objectFit:"cover", color:"1D2944"}} />
              <div className="card-body">
                <h5 className="card-title text-center" >Catering Services</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             
                <Link to="/services">
          <button className="btn btn-outline-secondary" style={{marginTop:"4%", marginLeft:"30%",padding:"10px 35px"}} >View More</button>
          
          </Link> </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-0 card mt-0" style={{backgroundColor:"#FAF8F6"}}>
              <CiDeliveryTruck className="card-img-top" alt="Service 1" style={{marginLeft:"37%",width:"25%",height:"25%", objectFit:"cover", color:"1D2944"}} />
              <div className="card-body">
                <h5 className="card-title text-center" >Fast Delivery</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             
                <Link to="/services">
          <button className="btn btn-outline-secondary" style={{marginTop:"4%", marginLeft:"30%",padding:"10px 35px"}} >View More</button>
          
          </Link> </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-0 card mt-0" style={{backgroundColor:"#FAF8F6"}}>
              <GiGlassCelebration className="card-img-top" alt="Service 1" style={{marginLeft:"37%",width:"25%",height:"25%", objectFit:"cover", color:"1D2944"}} />
              <div className="card-body">
                <h5 className="card-title text-center" >Party Bookings</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             
                <Link to="/services">
          <button className="btn btn-outline-secondary" style={{marginTop:"4%", marginLeft:"30%",padding:"10px 35px"}} >View More</button>
          
          </Link> </div>
            </div>
          </div>
         
         
          </div>
    </div>
  </div>
  );
}

export default Services;
