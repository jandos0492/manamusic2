import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faVk, faSpotify, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./ContactLinks.css";

const ContactLinks = () => {
  const [activeLink, setActiveLink] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconSize = windowWidth < 600 ? "lg" : "2x";

  return (
    <div className="contact-links">
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink("Youtube")}
        onMouseLeave={() => setActiveLink("")}
      >
        <a
          href="https://www.youtube.com/@manasbulan1954"
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faYoutube} size={iconSize} />
          {activeLink === "Youtube" && <span className="link-text">Youtube</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink("Spotify")}
        onMouseLeave={() => setActiveLink("")}
      >
        <a href="https://open.spotify.com/artist/6nQ15jrGGs654XqwilAtd2?si=pUhr-n8XR9eqWUBRtZDWFA"
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faSpotify} size={iconSize} />
          {activeLink === "Spotify" && <span className="link-text">Spotify</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink("Music")}
        onMouseLeave={() => setActiveLink("")}
      >
        <a href="https://music.apple.com/kg/artist/manas-bulan/1624015624"
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faMusic} size={iconSize} />
          {activeLink === "Music" && <span className="link-text">Music</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink("VK")}
        onMouseLeave={() => setActiveLink("")}
      >
        <a href="https://vk.com/artist/manasbulan"
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faVk} size={iconSize} />
          {activeLink === "VK" && <span className="link-text">VK</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink("TikTok")}
        onMouseLeave={() => setActiveLink("")}
      >
        <a href="https://www.tiktok.com/@manasbulan?_t=8eWIgEW15Yc"
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faTiktok} size={iconSize} />
          {activeLink === "TikTok" && <span className="link-text">Tiktok</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink("Instagram")}
        onMouseLeave={() => setActiveLink("")}
      >
        <a href="https://www.instagram.com/manasbulan/"
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faInstagram} size={iconSize} />
          {activeLink === "Instagram" && <span className="link-text">Instagram</span>}
        </a>
      </div>
    </div>
  )
}

export default ContactLinks;