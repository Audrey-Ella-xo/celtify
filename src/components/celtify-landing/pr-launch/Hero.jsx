import { useState } from 'react';
import '../../../styles/Hero.css'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Learn Celtic Languages Through
          <span className="highlight"> Augmented Reality</span>
        </h1>
        
        <p className="hero-subtitle">
          Immerse yourself in Celtic culture with our AI-powered AR language learning game.
          Experience ancient languages in a modern, interactive way.
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
            <span className="stat-number">4</span>
            <span className="stat-label">Celtic Languages</span>
          </div>
          <div className="stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Interactive Lessons</span>
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