import React from 'react';
import './Biography.css'; //Make sure to import your CSS file
import Bachelors from './Bachelors.png';

const Biography = () => {
  return (
    <div className="biography">
      <div className="div1">

        <div className='biography-card'>
          <p>
            Hello, I'm Nathan, a versatile professional with a interest for AI, game development and the world wide web. With a Bachelor's degree in Computer Science (Software Engineering) from the University of Wollongong, I've acquired a solid foundation in programming languages including C++, Python,  front-end web technologies such as HTML, CSS, and JavaScript.
          </p>
          <p>
            During my university years, I had the opportunity to collaborate on diverse projects, ranging from intimate teams of 2-3 members to larger groups of 6-8. A standout experience was the "Restoration Project Platform (RPP)", a carbon calculator designed for environmentally-minded individuals and organizations. Developed over my final year, this project was a collaborative effort with our contractor, Lord of the Trees.
          </p>
          <p>
            The RPP project enriched my expertise in full-stack application development, by introducing technologies such as cloud services, Continuous Integration and Continuous Delivery (CICD) pipeline for iterative development and producing and consuming apis to take user data to the next level. Our team held weekly stand-ups, and we rotated leadership roles to ensure everyone garnered comprehensive experience. This has lead me to be the well rounded software developer I am today. 
          </p>
          <p>
            Take a look around my portfolio to see  more about my projects, experiences, and the skills I bring to the table. If you'd like to discuss how my skills can benefit your team, please don't hesitate to get in touch.
          </p>
          <p>
            Thank you for stopping by!
          </p>
          <p>
            <strong>Nathan Gorsch</strong>
          </p>
        </div>
      </div>
      <div className="div2">

        <div class="vertical-line-1"></div>
        <div class="vertical-line-2"></div>

        <div>
        <h1 className='certification-heading'>My Certification</h1>
        <img src={Bachelors}></img>
        </div>
      </div>
    </div>
  );
};

export default Biography;
