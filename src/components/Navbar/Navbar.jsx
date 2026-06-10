import React, { useState, useEffect, useCallback, useRef } from 'react';
import "./Navbar.css";

const NAV_ITEMS = ['About', 'Qualification', 'Projects', 'Contact'];

function Navbar() {
    const [navbarVisible, setNavbarVisible] = useState(true);
    const lastScrollY = useRef(window.scrollY);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current) {
            setNavbarVisible(false);
        } else {
            setNavbarVisible(true);
        }

        lastScrollY.current = currentScrollY;
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className={`navbar-container ${navbarVisible ? "" : "navbar-hide"}`}>
            <nav className="navbar">
                <div></div>
                <div>
                    {NAV_ITEMS.map((item, i) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="nav-links">
                            <span className="highlight">0{i + 1}. </span>{item}
                        </a>
                    ))}
                    <button className="resume-button">Resume</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;