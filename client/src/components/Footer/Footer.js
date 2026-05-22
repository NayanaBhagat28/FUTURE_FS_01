import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Nayana V</h3>
            <p className="footer-description">
              2nd Year CSE-AIML Student at VTU. Passionate about AI & Machine Learning.
              Learning and building intelligent solutions for tomorrow.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a 
                href="https://github.com/NayanaBhagat28/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/nayana-bhagath-a98b70358" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:nayanabhagath28@gmail.com"
                className="footer-social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Nayana V. All rights reserved. 
          </p>
          <p className="footer-made">
            Made with <FaHeart className="heart-icon" /> using React.js & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;