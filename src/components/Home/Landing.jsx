import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="home">
        <p className='highlight'>Hi, my name is</p>
        <h1>Nathan Gorsch.</h1>
        <h2>Welcome to my online portfolio.</h2> 
        <p className='short-card'>
            I'm an experienced software engineer with a Bachelor's from University of Wollongong
            I mainly work in React but like all good software engineers I dabble.
            <br />
            This Website is heavily inspired (*copied) by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer"><span className='highlight'>Brittany Chiang's</span></a> portfolio website.<br />
            Please have a look around and let me know what you think!
        </p>
    </div>
  );
}

export default Landing;
