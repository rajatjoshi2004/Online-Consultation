import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand textColor" href="#">Er Sanjay Consultancy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>

  <div className="collapse navbar-collapse navBar-details" id="navbarSupportedContent">
    <ul className="navbar-nav  mx-auto me-5">
      {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li> */}
      <li className="nav-item mx-3">
        <a  className="nav-link text-light" >Home</a>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link text-light" >About</a>
      </li>
      <li className="nav-item dropdown mx-3">
        <Link to="/Consultant" className="nav-link dropdown-toggle text-light"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" >Career choice</a>
          <a className="dropdown-item" >career consultation</a>
        </div>
      </li>
      <li className="nav-item mx-3">
        <a className="nav-link text-light">Contact Us</a>
      </li>
      
    </ul>
    {/* <button className="btn btn-success my-2 my-sm-0" onClick={this.clickBtn}>
      <a to={this.state.val} className="text-white text-decoration-none" id="navBtn"> </a> 
    </button> */}
   
  </div>
</nav>
</>
        );
  
}

export default Navbar
