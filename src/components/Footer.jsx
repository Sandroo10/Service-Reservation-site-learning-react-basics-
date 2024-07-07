import React from 'react';
import './Footer.css';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact Us: Ezservice@gmail.com | +995 995 995</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Ezservice. Not all rights reserved :D.</p>
      </div>
    </footer>
  );
};

export default Footer;
