import React from 'react';
import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg"
import slide_two from "../../resources/images/slide_two.jpg"
import slide_three from "../../resources/images/slide_three.jpg"

const Carrousel = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
  
  }
  const fullHeight = `${window.innerHeight}px`;

  return (
    <div
    className="carraousel_wrapper"
    style={{
      height: fullHeight,
      overflow: 'hidden'
    }}
    >
      <Slider
      {...settings}
      >
    <div>
     <div className="carrousel_image"
     style={{
       background: `url(${slide_one})`,
       height: fullHeight
     }}
     >
     </div>
    </div>
    <div>
    <div className="carrousel_image"
     style={{
       background: `url(${slide_two})`,
       height: fullHeight
     }}
     >
     </div>
    </div>
    <div>
    <div className="carrousel_image"
     style={{
       background: `url(${slide_three})`,
       height: fullHeight
     }}
     >
     </div>
    </div>
      </Slider>
    </div>
  )
}

export default Carrousel
