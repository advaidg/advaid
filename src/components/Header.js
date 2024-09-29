import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="home" className="container">
      {/* Icons container */}
      <div className="social-icons">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/git.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/li.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src="/x.png" alt="Twitter" />
        </a>
      </div>

      <div className="text-container animate-on-scroll">
        <h1 >
        <h1>
        <span className="white-text">Hi, I'm</span> <span>Advaid Gireesan</span> <span className="white-text">,</span>
      </h1>
        </h1>
        <div className="description">
          and I'm a DevOps Specialist and Java API Developer with expertise in Kubernetes, OpenShift, and automation technologies.
        </div>
        <a href="#about" className="cta-button">
          WORK WITH ME
        </a>
      </div>
            <div className="quote-container animate-on-scroll">
        <p className="quote">Driving Technology, Delivering Excellence</p>
      </div>
      <div className="image-container animate-on-scroll">
        <img src="image.png" alt="Advaid Gireesan" />
      </div>
    </div>
  );
};

export default Header;
