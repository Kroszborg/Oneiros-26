import { useState, useCallback } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    return (
        <nav className="cosmos-navbar font-manrope">
            <div className="cosmos-nav-logo mobile-logo">
                <img src="/oneiros-logo.png" alt="ONEIROS" className="logo-img" />
            </div>

            <button
                className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle Navigation"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <div className={`nav-links-container ${isMobileMenuOpen ? 'mobile-visible' : ''}`}>
                <ul className="cosmos-nav-links left-links">
                    <li><a href="#about" className="font-medium tracking-[0.1em]">ABOUT</a></li>
                    <li><a href="#events" className="font-medium tracking-[0.1em]">EVENTS</a></li>
                    <li><a href="#gallery" className="font-medium tracking-[0.1em]">GALLERY</a></li>
                </ul>
                <div className="cosmos-nav-logo desktop-logo">
                    <img src="/oneiros-logo.png" alt="ONEIROS" className="logo-img" />
                </div>
                <ul className="cosmos-nav-links right-links">
                    <li><a href="#schedule" className="font-medium tracking-[0.1em]">SCHEDULE</a></li>
                    <li><a href="#sponsors" className="font-medium tracking-[0.1em]">SPONSORS</a></li>
                    <li><a href="#contact" className="font-medium tracking-[0.1em]">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
