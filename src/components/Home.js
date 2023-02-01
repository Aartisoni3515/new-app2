import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import NavBar from "./NavBar";
import { useEffect } from "react";
// import Contact from "./Contact";
// import Services from "./Services";
// import Cart from "./Cart"


function Home() {

  
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <>
    
      <NavBar />
      <div className="home-container">
          <div className="image-container">
        <div> 
         <img src="./Image/card1.png" className="img-1" alt="" data-aos="fade-right"/>
        <p> Price $17</p>
        <p className="content" >Free Shipping</p>
         </div>
         <div> 
         <img src="./Image/card2.png" className="img-1" alt=""data-aos="fade-up"/>
        <p> Price $15</p>
        <p className="content" >Free Shipping</p>

         </div> 
          <div> 
         <img src="./Image/card3.png" className="img-1" alt="" data-aos="fade-left" />
        <p> Price $16</p>
        <p className="content" >Free Shipping</p>

         </div>

        </div>
      </div>

      <div className="home-container">
          {/* <img src={img1} alt="" /> */}
          {/* <h2>Top Purchase</h2> */}
          {/* <h6>Here You can see the top products of us</h6> */}
          <div className="image-container">
        <div> 
         <img src="./Image/card4.png" className="img-1" data-aos="fade-right" />
        <p> Price $17 <br />
        Add to cart 
        </p>


        <p className="content" >Free Shipping</p>
         </div>
         <div> 
         <img src="./Image/card5.png" className="img-1" data-aos="fade-up" />
        <p> Price $15</p>
        <p className="content" >Free Shipping</p>

         </div>  <div> 
         <img src="./Image/card6.png" className="img-1" data-aos="fade-left" />
        <p> Price $16</p>
        <p className="content" >Free Shipping</p>

         </div>

        </div>
      </div>


     

{/* 
<Cart/>
    <Services/>
      <Contact/> */}


    </>
  );
}

export default Home;
