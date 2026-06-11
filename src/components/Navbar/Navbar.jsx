import React, { useState, useEffect, useCallback, useRef } from 'react';
import "./Navbar.css";

const NAV_ITEMS = ['About', 'Qualification', 'Projects'];

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

    const handleNavClick = (e, item) => {
        e.preventDefault();
        const target = document.getElementById(item.toLowerCase());
        if (!target) return;

        const startY = window.scrollY;
        const targetY = target.getBoundingClientRect().top + window.scrollY;
        const distance = targetY - startY;
        const duration = 800; // ms — increase for slower scroll
        let startTime = null;

        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, startY + distance * easeInOutCubic(progress));
            if (elapsed < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

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
                        <a
                            key={item}
                            href={"#" + item.toLowerCase()}
                            className="nav-links"
                            onClick={(e) => handleNavClick(e, item)}
                        >
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