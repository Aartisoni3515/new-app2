import { useState } from "react";
// import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [IsMobile , setIsMobile]= useState(false)
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Logo</h3>

        {/* <ul className="nav-links"> */}
        <ul className={IsMobile?  "nav-links-mobile": "nav-links"}

        onClick={()=> setIsMobile(false)} >
        

          <Link to="/" className="Home">
            <li>Home</li>
          </Link>

          <Link to="/Services" className="Contact">
            <li>Services</li>
          </Link>

          <Link to="/About" className="About">
            <li>About</li>
          </Link>

          <Link to="/Contact" className="Contact">
            <li>Contact</li>
          </Link>
        </ul>

         <button  className="mobile-menu-icon " onClick={()=>setIsMobile(!IsMobile)} >
          {IsMobile?  
          
           (<i className="fas fa-align-justify"></i> ):
          ( <i className="fas fa-align-justify"></i>) }
          

            
              </button>
        
      </nav>
    </>
  );
}

export default NavBar;
