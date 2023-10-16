import React from 'react';
import Carousel from "./carousel/Carousel";
import "./Qualifications.css"
import Bachelors from './Bachelors.png';

import pic1 from "./carousel/assets/1.png";
import pic2 from "./carousel/assets/2.png";
import pic3 from "./carousel/assets/3.png";
import pic4 from "./carousel/assets/4.png";
import pic5 from "./carousel/assets/5.png";
import pic6 from "./carousel/assets/6.png";
import pic7 from "./carousel/assets/7.png";
import pic8 from "./carousel/assets/8.png";

const Qualifications = () => {

  const slides = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
  ]

  return (
      <div className='qualification-container'>
        <h3 className='heading'><span className='highlight'>02. </span> My Qualifications</h3>
        
        <p className='qualification-text'>
          I've recieved a <a>Bachelors of Computer Science</a> majoring in Software Engineering awarded to me by the University of Wollongong(UOW).
          <br />
          <br />
          For my final project at UOW myself and five others collaborated with LotT to build RPP for which we recieved an 82 just 3 marks shy of a High Distinction.
        </p>
        
        
        <h3>LinkedIn Certifications</h3>
        <Carousel slides={slides} controls indicators interval={6000} autoPlay={true}/>
      </div>
  );
};

export default Qualifications;