import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./Contact";
import Services from "./Services";
import Cart from "./Cart"

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <div>
            <img
              src="./Image/card1.png"
              className="img-1"
              alt=""
              data-aos="fade-right"
            />
            <div
              style={{ margin: "0px 80px", marginBottom: "20px" }}
              className="para"
            >
              <p> Price $17</p>
              <p style={{ margin: "0px -20px" }} className="content">
                Free Shipping
              </p>
            </div>
          </div>
          <div>
            <img
              src="./Image/card2.png"
              className="img-1"
              alt=""
              data-aos="fade-up"
            />
            <div style={{ margin: "0px 80px" }} className="para">
              <p> Price $15</p>
              <p style={{ margin: "0px -20px" }} className="content">
                Free Shipping
              </p>
            </div>
          </div>
          <div>
            <img
              src="./Image/card3.png"
              className="img-1"
              alt=""
              data-aos="fade-left"
            />
            <div style={{ margin: "0px 80px" }} className="para">
              <p> Price $16</p>
              <p style={{ margin: "0px -20px" }} className="content">
                Free Shipping
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container">
        {/* <img src={img1} alt="" /> */}
        {/* <h2>Top Purchase</h2> */}
        {/* <h6>Here You can see the top products of us</h6> */}
        <div className="image-container">
          <div>
            <img
              src="./Image/card4.png"
              alt="img"
              className="img-1"
              data-aos="fade-right"
            />
              <div style={{ margin: "0px 73px" }} className="para">
              <p> Price $15</p>
              <p style={{ margin: "0px -20px" }}  className="content">Free Shipping</p>
            </div>
          </div>
          <div>
            <img
              src="./Image/card5.png"
              alt="img"
              className="img-1"
              data-aos="fade-up"
            />
            <div style={{ margin: "0px 80px" }} className="para">
              <p> Price $15</p>
              <p style={{ margin: "0px -20px" }}  className="content">Free Shipping</p>
            </div>
          </div>
          <div>
            <img
              src="./Image/card6.png"
              alt="img"
              className="img-1"
              data-aos="fade-left"
            />
            <div style={{ margin: "0px 80px" }} className="para">
              <p> Price $16</p>
              <p style={{ margin: "0px -20px" }}  className="content">Free Shipping</p>
            </div>
          </div>
        </div>
      </div>

    
    <Services/> 
<Cart/>
      <Contact/> 
    </>
  );
}

export default Home;
