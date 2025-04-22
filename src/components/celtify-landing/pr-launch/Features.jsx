import { useState } from 'react';
import '../../../styles/Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "VR Celtic Experience",
      description: "Step into the past and explore ancient Celtic cities like Dublin, Galway, and Edinburgh with historically accurate environments. Our VR simulation creates an immersive way to learn and preserve the language.",
      icon: "ar-icon"
    },
    {
      title: "Real-time Conversation",
      description: "Speak English, and the AI powered AR simulation translates it into your chosen Celtic language in real-time. Hear and see translations to learn contextually in a dynamic, immersive environment with adaptive NPC responses.",
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