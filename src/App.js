import "./global.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Home/Landing";
import About from "./components/About/About";
import Qualifications from "./components/About/Qualifications";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Bottom from "./components/Bottom/Bottom";



function App() {
  return (
    <div className="site">
      <Navbar />
      <div className="content">
        <Landing />
        <About />
        <Qualifications />
        <Projects />
      </div>
      <Footer />
      <Bottom />
    </div>
    
  );
}

export default App;
