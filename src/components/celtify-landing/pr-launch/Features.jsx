import { useState } from 'react';
import '../../../styles/Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "AR Language Immersion",
      description: "Point your camera at objects around you and learn their names in Celtic languages. Our AR technology recognizes everyday items and teaches you vocabulary in context.",
      icon: "ar-icon"
    },
    {
      title: "AI Pronunciation Coach",
      description: "Our advanced AI listens to your pronunciation and provides real-time feedback to perfect your accent and speaking abilities.",
      icon: "ai-icon"
    },
    {
      title: "Cultural Context",
      description: "Learn not just the language but the rich cultural history behind Celtic languages through interactive storytelling and historical AR reconstructions.",
      icon: "culture-icon"
    },
    {
      title: "Gamified Learning Path",
      description: "Earn rewards, unlock achievements, and compete with friends as you progress through your language learning journey.",
      icon: "game-icon"
    }
  ];

  return (
    <section id="features" className="features-section">
      <h2 className="section-title">Why Choose Celtify?</h2>
      
      <div className="features-container">
        <div className="features-tabs">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`feature-icon ${feature.icon}`}></div>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="feature-showcase">
          <div className="feature-content">
            <h3>{features[activeFeature].title}</h3>
            <p>{features[activeFeature].description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="feature-visual">
            {/* This would be a visual representation of the active feature */}
            <div className={`feature-demo ${features[activeFeature].icon}-demo`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;