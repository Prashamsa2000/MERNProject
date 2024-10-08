import React from 'react'
import B1 from "../assets/herosection1.jpg"
import B2 from "../assets/herosection2.jpg"
import B3 from "../assets/herosection3.jpg"
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
                    <div className="carousel-item active">
                        <img src={B1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block top-0 mt-1 right-0 text-end"  >
                            <h5 style={{fontSize:"90px",fontFamily:"cursive"}}>Experience</h5>
                            <h5 style={{fontSize:"90px",fontFamily:"cursive"}}>the Flavor !</h5>
                            </div>
                    </div>+
                    <div className="carousel-item">
                        <img src={B2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                               
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={B3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                
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
