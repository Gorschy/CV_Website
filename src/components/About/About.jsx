import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
        <div className="heading-container">
            <h3 className="heading"><span className='highlight'>01. </span> About Me</h3>
        </div>
        <div className='about-content'>
          <p>
            Hello! Ever since I was first introduced to computers I've been interested in them either for 
            learning, having fun or creating random things on the internet. I think its only natural that I pursue a career 
            in this which has led me to this. 
            <br />
            <br />
            I've previously worked at an IT consultant firm that focused on auditing customer data and 
            managing customers through an in house ticket system.
            <br />
            <br />
            Additionally I was one of six team members to develop a carbon calculator website called <a>Restoration Projects Platform (RPP)</a>
            for <a>Lord of the Trees(LotT)</a>, this project was implemented across 6 months with fortnightly 
            communication with our liason at LotT, <a>Aymeric Maudous</a>.
            <br />
            <br />
            Currently I am looking for a more permanent software engineering position. Recently I've been working with the 
            following technologies, but I am always up for learning new things.
          </p>
          
          <div className="dot-point-container">
              <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Amazon Web Services</li>
              </ul>
              <ul>
                  <li>C++</li>
                  <li>Python3</li>
              </ul>
          </div>
        </div>
    </div>
  );
};

export default About;
