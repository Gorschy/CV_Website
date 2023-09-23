import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Carousel from "./carousel/Carousel";
import Biography from './Biography';

import "./About.css"

import pic1 from "./carousel/assets/1.png";
import pic2 from "./carousel/assets/2.png";
import pic3 from "./carousel/assets/3.png";
import pic4 from "./carousel/assets/4.png";
import pic5 from "./carousel/assets/5.png";
import pic6 from "./carousel/assets/6.png";
import pic7 from "./carousel/assets/7.png";
import pic8 from "./carousel/assets/8.png";

const About = () => {


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
    <div className="about">
      <div style={{ display: "flex" }}>
        <div>
          <Biography />
          <div className='background-alternate'>
          <Carousel slides={slides} controls indicators interval={6000} autoPlay={true}/>
          <p className='carousel-tag'><span className="text-background">LinkedIn Certificates</span></p>
          </div>
          <Skills />
          <div className='education-background'>
          <Education />
          </div>
          
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default About;