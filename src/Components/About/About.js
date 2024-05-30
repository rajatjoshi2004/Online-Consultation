import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFeather} from '@fortawesome/free-solid-svg-icons';
import img1 from "../../Images/shutterstock_606904901-1024x1024.jpg"
const About = () => {
  return (
    <>
             <div className="overflow-hidden aboutsection">
             <div className="container py-5">
                 <div className="row  m-0 p-0 ">
                     <div className="col-md-6">
                        <img src={img1} width="60%"/>
                     </div>
                     <div className="col-md-6">
                        <h3>We are the largest employee career advisory site.</h3>
                        {/* <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. officia possimus error,  voluptate itaque beatae totam. Quis, incidunt. Incidunt, odit necessitatibus.</p> */}
                        <ul className="list-unstyled">
                            <li className="py-1 w-25 mt-5">
                            <FontAwesomeIcon className="text-success mr-1" icon={faFeather} />
                                Profile
                            </li>
                            <li className="pb-1">
                            <FontAwesomeIcon className="text-success mr-1" icon={faFeather} />
                                Make gab  analysis for your skills
                            </li>
                            <li className="pb-1">
                            <FontAwesomeIcon className="text-success mr-1" icon={faFeather} />
                                Recomended career plan
                            </li>
                            <li className="pb-1">
                            <FontAwesomeIcon className="text-success mr-1" icon={faFeather} />
                                Recomended training plan
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
