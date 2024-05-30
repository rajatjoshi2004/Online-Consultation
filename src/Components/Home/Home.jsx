import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
                    <div className="bg d-flex justify-content-center align-items-center">
                     <div className="ml-4" >
                         <h1 className="text-white">Find Your Next Job</h1>
                         <h2 className="text-white">Make your training plan clear</h2>
                         <div className="row form-container mt-4">
                             <form>
                             <div class="row">
                             <div class="col-sm">

                                 <select name ="educationLevel"   id="educationLevel" className="mt-4 borderLeft headerInput">
                                <option value="choose"  selected disabled> The Target Job</option>
                                

                                
                                                <option  value='62d08701fdecb1bbfe1f2284' > Junior Database Administrators </option>
                                                <option value='62d089a2fdecb1bbfe1f228c'> senior Database Administrators </option>
                                                <option  value='62d0a27633c0e3fab87dc1fb'>junior Database Manager</option>
                                                <option  value='62d0a3b733c0e3fab87dc204'> senior Database manager </option>
                                                {/* <option onClick={ localStorage.setItem("jobid", '62d0b51d33c0e3fab87dc385')} > fresh Database manager </option> */}


                                           
                                      </select>
                                      </div>
                                      <div class="col-sm">

                                 <a to="/careerchoice"  name="/careerchoice" className="btn-success btn border mt-4 " id="btn"  >career path </a> 
                                 <a to="/training"  name="/training" className="border ml-2  btn btn-success mt-4" id="btn"  >consultation </a> 
                            </div>
                            </div>
                            </form>
                         </div>
                     </div>
                    </div>
                    </>
  )
}

export default Home
