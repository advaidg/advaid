import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="animate-on-scroll">Work with Me</h2>
      <div className="contact-details animate-on-scroll">
        <div className="icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/git.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/li.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="x.png" alt="X" className="social-icon" />
          </a>
        </div>
        <a href="mailto:advaidg@gmail.com" className="email-link">
          advaidg@gmail.com
        </a>
      </div>
      <div className="circuit-image">
        <img src="/tech.png" alt="Circuit Design" />
      </div>
    </div>
  );
};

export default Contact;
