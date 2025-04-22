import { useState } from 'react';
import '../../../styles/Hero.css'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Learn Celtic Languages Through
          <span className="highlight"> AI and Augmented Reality</span>
        </h1>
        
        <p className="hero-subtitle">
          Immerse yourself in Celtic culture with our AI-powered VR - AR language learning game.
          Explore ancient Celtic cities while learning languages in a culturally immersive environment.
        </p>
        
        <div className="hero-cta">
          <button 
            className={`primary-button ${isHovered ? 'pulse' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Join the Waitlist
          </button>
          <button className="secondary-button">Watch Preview</button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Celtic Languages</span>
          </div>
          <div className="stat">
            <span className="stat-number">VR-AR</span>
            <span className="stat-label">Immersive Learning</span>
          </div>
          <div className="stat">
            <span className="stat-number">AI</span>
            <span className="stat-label">Powered Learning</span>
          </div>
        </div>
      </div>
      
      <div className="hero-image">
        {/* This would be your AR visualization/demo */}
        <div className="ar-preview">
          <div className="phone-frame">
            <div className="ar-content">
              <div className="ar-object"></div>
              <div className="ar-interaction-point"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;