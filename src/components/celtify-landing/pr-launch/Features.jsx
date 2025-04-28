import { useState } from 'react';
import '../../../styles/Features.css';

const Features = ({ onNavigate }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      title: "VR Celtic Experience",
      description: "Step into the past and explore ancient Celtic cities like Dublin, Galway, and Edinburgh with historically accurate environments. Our VR simulation creates an immersive way to learn and preserve the language.",
      icon: "ar-icon",
      pageId: "vr-experience" // ID for navigation
    },
    {
      title: "Real-time Conversation",
      description: "Speak English, and the AI powered AR simulation translates it into your chosen Celtic language in real-time. Hear and see translations to learn contextually in a dynamic, immersive environment with adaptive NPC responses.",
      icon: "ai-icon",
      pageId: "real-time-conversation" // ID for navigation
    },
    {
      title: "Cultural Context",
      description: "Learn not just the language but the rich cultural history behind Celtic languages through interactive storytelling and historical AR reconstructions.",
      icon: "culture-icon",
      pageId: "cultural-context" // ID for navigation
    },
    {
      title: "Gamified Learning Path",
      description: "Earn rewards, unlock achievements, and compete with friends as you progress through your language learning journey.",
      icon: "game-icon",
      pageId: "gamified-learning" // ID for navigation
    }
  ];

  // Handle the Learn More button click
  const handleLearnMoreClick = () => {
    if (onNavigate) {
      // Navigate to the under construction page with the active feature's ID
      onNavigate(features[activeFeature].pageId);
      
      // Scroll to top when navigating
      window.scrollTo(0, 0);
    }
  };

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
            <button 
              className="learn-more-btn"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
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