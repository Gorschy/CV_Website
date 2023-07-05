import React from 'react';
import Education from './Education';
import Skills from './Skills';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <Education />
      <Skills />
    </div>
  );
};

export default About;