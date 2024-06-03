import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "../../Images/WhatsApp Image 2024-05-31 at 12.11.37_407ac0b4.jpg";
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <>
             <div className="overflow-hidden aboutsection">
             <div className="container py-5">
                 <div className="row  m-0 p-0 ">
                     <div className="col-md-6 rounded-circle my-3">
                        <img src={img2} className='rounded-circle' width="50%"/>
                     </div>
                     <div className="col-md-6 my-3">
                        <h3>About Me sanjay</h3>
                        {/* <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. officia possimus error,  voluptate itaque beatae totam. Quis, incidunt. Incidunt, odit necessitatibus.</p> */}
                        <ul className="list-unstyled">
                            <li className="pb-1 ">
                            <FontAwesomeIcon icon={faBriefcase} />
                                  {"    "}  HOD OF MCAM SURLON INDIA LTD.
                            </li>
                            <li className="pb-1">
                            <FontAwesomeIcon icon={faBriefcase} />
                            {"  "}  EX. SENIOR ENGINEER OF TATA ELCETRONICS PVT. LTD. 
                            </li>
                            <li className="pb-1">
                            <FontAwesomeIcon icon={faBriefcase} />
                            {"  "}   EX. ASSOCIATE ENGINEER OF M/S SHRIRAM PISTON & RINGS LTD.
                            </li>
                            <li className="pb-1">
                            <FontAwesomeIcon icon={faBriefcase} />
                            {"  "}    AND A CAREER CONSULTANT AROUND THE WORLD.
                            </li>
                        </ul>
                     </div>
                 </div>
             </div>
             </div>
           </>
  )
}

export default About
