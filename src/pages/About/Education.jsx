import React from 'react';
import './Education.css'; //Make sure to import your CSS file

const Education = () => {
  return (
    <div className="education">
        <h1>Education</h1>
      <div className="content">
          <div>
              <h2>University of Wollongong</h2>
              <p>Bachelor of Computer Science (Software Engineering)</p>
              <p>February 2018 – November 2021</p>
          </div>
          <div>
              <h2>University of Wollongong</h2>
              <p>University Entrance Certificate (Stream 2: Information Technology)</p>
              <p>February 2016 - November 2017</p>
          </div>
          <div>
              <h2>Eden Marine High School</h2>
              <p>Higher School Certificate (HSC)</p>
              <p>January 2010 – November 2015</p>
          </div>
          <div>
              <h2>University of Wollongong</h2>
              <p>Summer Master Class</p>
              <p>November 2015 – December 2015</p>
          </div>
        </div>
    </div>
  );
};

export default Education;
