import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as farFaHouse } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const iconSize = windowWidth < 600 ? "lg" : "2x";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <Link className="home-icon" to="/">
          <FontAwesomeIcon icon={farFaHouse} size={iconSize} />
        </Link>
        {isMobile ? (
          <div ref={menuRef}>
            <button className="hamburger-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
            {isMenuOpen && (
              <nav className="mobile-nav">
                <Link to="/library" className="link" onClick={toggleMenu}>
                  Library
                </Link>
                <Link to="/contact-me" className="contact link" onClick={toggleMenu}>
                  Contact Me
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </nav>
            )}
          </div>
        ) : (
          <nav>
            <Link to="/library" className="link">
              Library
            </Link>
            <Link to="/contact-me" className="contact link">
              Contact Me
              <i className="fas fa-arrow-right"></i>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar;