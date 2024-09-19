import React from 'react';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';

const style = {
  width: '100%',
  height: '300px', 
  objectFit: 'cover',
};

const OurWorks = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5" style={{ fontSize: '46px', fontFamily: 'monospace', marginTop: "10%" }}>Our Gallery</h2>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={gallery1} style={style} />
        </div>
        <div className="col-md-6 mb-4">
          <img src={gallery2} style={style}  />
        </div>
        <div className="col-md-4 mb-4">
          <img src={gallery3} style={style} />
        </div>
        <div className="col-md-4 mb-4">
          <img src={gallery4} style={style}  />
        </div>
        <div className="col-md-4 mb-4">
          <img src={gallery5} style={style}  />
        </div>
        
      </div>
      <br></br><br></br>
    </div>
  );
}

export default OurWorks;
