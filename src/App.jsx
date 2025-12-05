import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/programs';
import Title from './Components/Title/Title';
import Aboutus from './Components/Aboutus/Aboutus';
import Campus from './Components/Campus/campus';
import Testmonials from './Components/Testmonials/testmonials';
import ContactUs from './Components/Contactus/contactus'
import Footer from './Components/Footer/footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle ='OUER PROGRAMS' title = 'what we offer'/>
        <Programs/>
        <Aboutus/>
        <Title subTitle ='Gallery' title = 'Campus poto'/>
      </div>
      <Campus/>
      <Title subTitle ='TESTMONIALS' title = 'What student says'/>
      <Testmonials/>
      <Title subTitle ='Contact Us' title = 'Get in Touch'/>
    <ContactUs/>
    <Footer/>


      
    </div>
  )
}

export default App
