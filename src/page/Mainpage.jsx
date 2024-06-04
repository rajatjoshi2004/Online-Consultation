import React from 'react'
import Navbar from '../Components/Navbar/Navbar.js'
import Home from '../Components/Home/Home.jsx'
import About from '../Components/About/About.js'
import Card from '../Components/Card/Card.js'
import SubscriptionPage from './SubscriptionPage.js'
import ContactForm from '../Components/contactForm/ContactForm.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import Aboutme from '../Components/AboutMe/About.jsx'
const Mainpage = () => {
  return (
    <>
         <Navbar/>
      <Home/>
      <About/>
    <SubscriptionPage/>
    <ContactForm/>
    <Aboutme/>
    <Footer/>
    </>
  )
}

export default Mainpage