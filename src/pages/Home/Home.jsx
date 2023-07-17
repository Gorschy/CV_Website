import React from 'react';
import './Home.css';
import ProfilePicture from './cv_profile_stock.png';

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        {/* content for the left div */}
        <img src={ProfilePicture} alt="Profile" />
      </div>
      <div className="home__right">
        {/* content for the right div */}

        <h2>Welcome! I'm Nathan Gorsch</h2> 
        <h3>A full-stack developer with a passion for AI and game development. My portfolio showcases my expertise in React.js, Python, C++, and deploying projects using AWS. Let's transform your ideas into innovative web applications. Reach out and let's make meaningful contributions to technology together.</h3>
        <div className="home__buttons">
        <button className='resume-button'>
              Resume
          <svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="0.75em" viewBox="0 0 24 24">
            <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"/>
          </svg>
            
        </button>

          <button className='contact-button'>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
