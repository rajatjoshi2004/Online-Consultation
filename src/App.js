import React from 'react'

import Mainpage from './page/Mainpage.jsx'
import Consultpage from './page/Consultpage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/Consultant' element={<Consultpage/>}/>
    </Routes>
   </BrowserRouter>
   
   
    
    </>
  )
}

export default App
