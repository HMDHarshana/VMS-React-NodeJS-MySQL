import React from 'react';
import logo from '../images/logo.png';
import whatsapp from '../images/whatsapp.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    fontFamily: "'Jockey One', sans-serif"
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const sectionStyle = {
    flex: 1,
    margin: '10px'
  };

  const pStyle = {
    margin: '5px 0'
  };

  const logoStyle = {
    width: '50px',
    marginBottom: '10px'
  };

  const iconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px'
  };

  const iconLinkStyle = {
    margin: '0 10px'
  };

  const iconImgStyle = {
    width: '24px',
    height: '24px'
  };

  const footerBottomStyle = {
    borderTop: '1px solid #fff',
    paddingTop: '10px',
    marginTop: '10px',
    fontSize: '14px'
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
      }
      .contact-info, .logo-section, .social-links {
        text-align: center;
        margin: 10px 0;
      }
      .social-links .icons {
        justify-content: space-evenly;
      }
    }
  `;

  return (
    <footer style={footerStyle}>
      <style>
        {mediaQueryStyle}
      </style>
      <div className="footer-content" style={footerContentStyle}>
        <div className="contact-info" style={sectionStyle}>
          <p style={pStyle}>Contact Us</p>
          <p style={pStyle}>+94 77 743 3400</p>
          <p style={pStyle}>secondmotherland@gmail.com</p>
        </div>
        <div className="logo-section" style={sectionStyle}>
          <p style={pStyle}>
            <img src={logo} alt="Logo" style={logoStyle} />SECONDMOTHERLAND.ORG
          </p>
        </div>
        <div className="social-links" style={sectionStyle}>
          <div className="icons" style={iconsStyle}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} aria-label="Instagram">
              <img src={instagram} alt="Instagram" style={iconImgStyle} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} aria-label="WhatsApp">
              <img src={whatsapp} alt="WhatsApp" style={iconImgStyle} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} aria-label="Facebook">
              <img src={facebook} alt="Facebook" style={iconImgStyle} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" style={iconImgStyle} />
            </a>
          </div>
          <p style={pStyle}>Contact Support | Login | Privacy Policy | About Us | Contact Us</p>
        </div>
      </div>
      <div className="footer-bottom" style={footerBottomStyle}>
        <p style={pStyle}>All Content © 2024 secondmotherland</p>
        <p style={pStyle}>All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
