import React from 'react'
import B1 from "../assets/herosection1.jpg"
import B2 from "../assets/herosection2.jpg"
import B3 from "../assets/herosection3.jpg"
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    
                    <div className="carousel-item active" style={{ position: 'relative' }}>
    <img src={B1} className="d-block w-100" alt="..." /* style={{ 
     
      maxHeight: "650px", 
      maxWidth: "1440px", 
      objectFit: "cover" 
    }} *//>
    <div className="carousel-caption d-none d-md-block" style={{ position: 'absolute', bottom: 'auto', top: '10%', left: '60%', textAlign:"left" }}>
        <h5 style={{ fontSize: "70px", fontFamily: "monospace" }}>Experience</h5>
        <h5 style={{ fontSize: "65px", fontFamily: "monospace" }}>The Flavor !</h5>
        <Link to="/menu"><button type="button" className="btn btn-outline-light position-absolute " style={{ fontSize: '20px', fontFamily: 'monospace', padding: '15px 30px', top: '115%' }}>
                            View Menu
                                  
                        </button>
                        </Link>

    </div>
</div>

                    <div className="carousel-item">
                        
                        <img src={B2} className="d-block w-100" alt="..."style={{ 
    
      maxHeight: "650px", 
      maxWidth: "1440px", 
      objectFit: "cover" 
    }}/>
                            <div className="carousel-caption d-none d-md-block" style={{ position: 'absolute', bottom: 'auto', top: '20%', right: '50%', textAlign:"left" }}>
                            <h5 style={{ fontSize: "60px", fontFamily: "monospace" }}>Simply Delicious,</h5>
                            <h5 style={{ fontSize: "60px", fontFamily: "monospace" }}>Every Time</h5>
                            </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={B3} className="d-block w-100" alt="..."style={{ 
     
      maxHeight: "650px", 
      maxWidth: "1440px", 
      objectFit: "cover" 
    }}/>
                            <div className="carousel-caption d-none d-md-block" style={{ position: 'absolute', bottom: 'auto', top: '20%', right: '50%', textAlign:"left" }}>
                            <h5 style={{ fontSize: "70px", fontFamily: "monospace" }}>Delight in</h5>
                            <h5 style={{ fontSize: "70px", fontFamily: "monospace" }}>Every Bite</h5>
                                
                            </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banner
