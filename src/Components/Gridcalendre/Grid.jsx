import React from 'react'
import Calendre from '../Calendre/Calendre'
import CareerConsultancyForm from '../CareerConsultForm/Form'
const Grid = () => {
  return (
    <>
        <div className="container text-center" style={{border:"2px solid black" ,marginTop:"15vh"}}>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <div className="row" style={{border:"2px solid black"}}>
      <div className="col-md-">
        <h2>Service Name</h2>
      </div>
      <div className="row mx-0">
      <h4 >Check out availability and book the date and time that works for you</h4>
      </div>
    </div>
    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    <div className="row" style={{border:"2px solid black"}}>
      <div className="col-6 col-md-4 my-2">Select a Date and Time</div>
      <div className="col-6 col-md-4 my-2">India Standard Time(IST) </div>
     
    </div>
    {/* Columns are always 50% wide, on mobile and desktop */}
    <div className="row" style={{border:"2px solid black"}}>
      <div className="col-6 my-5">
        <Calendre/>
      </div>
      <div className="col-6 my-5">

     <CareerConsultancyForm/>

      </div>
    </div>
  </div>

    </>
  )
}

export default Grid