import React from "react";
import NavBar from "./NavBar";
import AOS from "aos";
import 'aos/dist/aos.css'
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function Contact() {

    useEffect(()=>{
      AOS.init({duration:2000})
    },[])

  const [values, setValues] = useState({});
  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };


    


  return (
    <>
      <NavBar />
      <div className="container-1"  >
        <div className="card" data-aos="fade-right" >
          <div className="item">
            <span>
              <h2>Location</h2>
            </span>
            <p> Johari Bazar Delhi</p> <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              aliquid. <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit rem <br />
              repudiandae culpa quod amet iste saepe, possimus atque alias ut
              quis <br />
               facilis tenetur 
              fugit laborum eaque cupiditate ratione soluta libero.
            </p>
          </div>

          <div className="icons">
         
            <span>
              <h2>Follow us</h2>
            </span>
            <p className="icons-list">
              <FaInstagram />
              <FaYoutube />
              <FaLinkedinIn />
              <FaFacebook />
            </p>
          </div>
         
        </div>

        <div className="contact-2" data-aos="fade-left">
          <h2 className="heading">Contact US</h2>
          <form className="form">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="email"
              id=""
              placeholder="Enter a valid email address"
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="message"
              id=""
              placeholder="Enter Your message"
              onChange={handleChange}
            />
            <br />
            <button type="submit" className="btn">
              submit
            </button>
          </form>
        
        </div>
      </div>
    </>
  );
}

export default Contact;
