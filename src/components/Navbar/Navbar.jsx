import React, { useState, useEffect } from 'react';
import "./Navbar.css";

function Navbar() {
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        console.log(`Current Scroll: ${currentScrollY}, Last Scroll: ${lastScrollY}`); // Debug log

        if (currentScrollY > lastScrollY && navbarVisible) {
            console.log("Hiding Navbar"); // Debug log
            setNavbarVisible(false);
        } else if (currentScrollY < lastScrollY && !navbarVisible) {
            console.log("Showing Navbar"); // Debug log
            setNavbarVisible(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navbarVisible, lastScrollY]);

    return (
        <div className={`navbar-container ${navbarVisible ? "" : "navbar-hide"}`}>
            <nav className="navbar">
                <div></div>
                <div>
                    <button className="nav-links"><span className="highlight">01. </span> About</button>
                    <button className="nav-links"><span className="highlight">02. </span> Qualification</button>
                    <button className="nav-links"><span className="highlight">03. </span> Projects</button>
                    <button className="nav-links"><span className="highlight">04. </span> Contact</button>
                    <button className="resume-button">Resume</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
