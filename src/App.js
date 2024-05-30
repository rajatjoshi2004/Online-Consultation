import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.js'
import Card from './Components/Card/Card.js'
import SubscriptionPage from './page/SubscriptionPage.js'
import ContactForm from './Components/contactForm/ContactForm.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
   
   
    <Navbar/>
      <Home/>
      <About/>
    <SubscriptionPage/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
