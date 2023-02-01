import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Services extends Component {
    render() {
        return (
          <>
            <Carousel  autoPlay={true}>
                <div>
                    <img src="../Image/img2.jpg" />
                </div>
                <div>
                <img src="../Image/img1.jpg" />
                   
                </div>
                <div>
                <img src="../Image/img3.jpg" />

                </div>
                <div>
                <img src="../Image/img4.png" />

                </div>
            </Carousel>
            </>
        );
    }
};
 
export default Services;