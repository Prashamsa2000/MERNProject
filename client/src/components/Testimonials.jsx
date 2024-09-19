import React from 'react';
import Person1 from '../assets/Person1.jpg'
import Person2 from '../assets/Person2.jpg'
import Person3 from '../assets/Person3.jpg'
import Person4 from '../assets/Person4.jpg'
import Person5 from '../assets/Person5.jpg'
import Person6 from '../assets/Person6.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const testimonials = [
    {
      name: "Person 1",
      image:Person1,
      feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius eveniet necessitatibus! Co",
      
    },
    {
      name: "Person 2",
      image:Person2,
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque, laboriosam accusamus et"
    },
    {
      name: "Person 3",
      image: Person3, 
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque, laboriosam accusamu"
    },
    {
      name: "Person 4",
      image: Person4, 
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque, laboriosam accusamu"
    },
    {
      name: "Person 5",
      image: Person5, 
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque, laboriosam accusamu"
    },
    {
      name: "Person 6",
      image: Person6, 
      feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque, laboriosam accusamu"
    }
  ];

  
const Testimonials = () => {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3
    };

  return (
    
    <div className="container mt-5">
      <h2 className="text-center mb-5" style={{ fontSize: '46px', fontFamily: 'monospace', marginTop:"10%" }}>Testimonials</h2>
      <Slider {...settings}>
      
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 " key={index}>
            <div className="card mb-4 " style={{backgroundColor:"linen", color:"black", margin:"13px"}}>
              <br></br>
              <img src={testimonial.image} className="card-img-top rounded-circle mx-auto mt-3" alt={testimonial.name} style={{ width: '80px', height: '80px' , objectFit: "cover" }} />
              <div className="card-body text-center">
              <h5 className="card-title" style={{ fontSize: '27px', fontFamily: 'monospace' }}>{testimonial.name}</h5><br></br>
                <p className="card-text text-muted">{testimonial.title}</p>
                <p className="card-text">{testimonial.feedback}</p><br></br>
              

               
              </div>
            </div>
          </div>
        ))}
      
      </Slider>
    </div>
   
  );
}
  
export default Testimonials;
