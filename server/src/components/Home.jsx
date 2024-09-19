import React from 'react'
import Banner from './Banner'
import Serviceitems from './Serviceitems'
import About from './About'
import Services from './Services'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Serviceitems />
      <About/>
      <Services/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
