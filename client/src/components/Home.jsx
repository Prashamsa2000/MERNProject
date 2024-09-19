import React from 'react'
import Banner from './Banner'
import Serviceitems from './Serviceitems'
import About from './About'
import Services from './Services'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Track from './Track'
import Gallery from './Gallery'

const Home = () => {
  return (
    <div>
      <Banner />
      <Track/>
      <About/>
      <Services/>
      
      <Testimonials/>
      <Gallery/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
