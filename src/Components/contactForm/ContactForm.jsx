import React from 'react'
import Img from '../../Images/Forest.ac7952d9f9db9881a3a3.png'
const ContactForm = () => {
  return (
    <>
         <div className=" row p-0 m-0">
                 <h2 className="py-2 about-text text-center">Contact</h2>
                 
                 <div className="col-md-6 d-flex align-items-center">
                 <div>
                 {/* <h2 className="py-2 about-text">Contact</h2> */}
                 <p className="aboutpragragh text-secondary"> If you have a question about our career assessments, use can use the the form below. We do try to answer all queries within 48 hours !!</p>

                    <form>
                        <input type="text" placeholder="Your name" className="form-control form-group mt-4"/>
                        <input type="text" placeholder="Your Email" className="form-control form-group  mt-4"/>
                        <input type="text" placeholder="Subject" className="form-control form-group mt-4"/>
                        <textarea name="" id="" rows="7" className="form-control form-group mt-4" placeholder="Your Message" ></textarea>
                        <button className="btn px-5 py-2 mb-3 mt-4 btn-success text-bolder" type="submit">Submit</button>
                    </form>
                 </div>
             </div>

             <div className="col-md-6 d-flex justify-content-center ">
                         <img src= {Img} alt="" className="w-75"/>
                 </div>
                 </div>
             
    </>
  )
}

export default ContactForm