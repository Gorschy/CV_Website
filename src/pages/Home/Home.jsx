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

        <h2>Turning Vision Into Reality With Code And Design.</h2> 
        <h3>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</h3>
        <button>
          Resume
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"/></svg>
        </button>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Home;
