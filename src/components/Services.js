import React from "react";
// import SimpleImageSlider from "react-simple-image-slider";
import NavBar from "./NavBar";

// const images = [ 
//   { url: "../Image/shop.jpg" },
//   { url: "../Image/img2.jpg" },
//   { url: "../Image/img3.jpg" },
//   { url: "../Image/img4.png" },
//   { url: "../Image/img1.jpg" },
// ];
// const image = [ 
//   { url: "../Image/" },
//   { url: "../Image/card1.png" },
//   { url: "../Image/card2.png" },
//   { url: "../Image/card3.png" },
//   { url: "../Image/card4.png" },
// ];


const Services = () => {
  return (
    <>
      <NavBar />
      {/* <div classNameName="slider">
        <SimpleImageSlider
          width={1500}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
           
        />
      </div>*/}

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <img src="../Image/shop.jpg" className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src="../Image/img2.jpg" className="d-block w-100" alt="..."/>
      <div classNameName="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src="../Image/img3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src="../Image/img4.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  );
};
export default Services;
