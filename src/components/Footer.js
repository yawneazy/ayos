import React from 'react';
import githublogo from '../images/github-logo.png';
import linkedinlogo from '../images/linkedin-logo.png';
import mailicon from '../images/mail-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Let's connect (:</h1>
<div className="footer-logos">

<a href="mailto:yaneza@arizona.edu">
  <img src={mailicon} alt="Mail icon" className="about-logos" />
</a>

<a href="https://github.com/yawneazy">
             <img src={githublogo} alt="Github logo" className="about-logos" />
             </a>
             <a href="https://www.linkedin.com/in/alyssayanezolson" target="_blank" rel="noopener noreferrer">
  <img src={linkedinlogo} alt="LinkedIn logo" className="about-logos" />
</a>
             </div>
    </footer>
  );
};

export default Footer;