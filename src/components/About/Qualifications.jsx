import React from 'react';
import Carousel from "./carousel/Carousel";
import "./Qualifications.css";

const slides = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (n) => require(`./carousel/assets/${n}.png`)
);

const Qualifications = () => {
  return (
    <div className='qualification-container' id="qualification">
      <h3 className='heading'><span className='highlight'>02. </span> My Qualifications</h3>
      
      <p className='qualification-text'>
        I've received a <strong>Bachelors of Computer Science</strong> majoring in Software Engineering 
        awarded to me by the University of Wollongong (UOW).
        <br />
        <br />
        Additionally I've furthered my education through multiple LinkedIn courses, 
        my certificates can be found below.
      </p>

      <h3>LinkedIn Certifications</h3>
      <Carousel slides={slides} controls indicators interval={6000} autoPlay={true} />
    </div>
  );
};

export default Qualifications;