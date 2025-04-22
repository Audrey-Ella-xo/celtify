import '../../../styles/AboutProduct.css';

const AboutProduct = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>Revitalizing Celtic Languages Through Technology</h2>
          
          <div className="vision-mission">
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To create a world where Celtic languages thrive again through engaging, 
                accessible learning experiences powered by cutting-edge technology.
              </p>
            </div>
            
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                Celtify makes learning Irish, Scottish Gaelic, Welsh, and Breton fun and 
                effective by combining augmented reality, artificial intelligence, and 
                gamification principles.
              </p>
            </div>
          </div>
          
          <div className="languages-covered">
            <h3>Celtic Languages You'll Learn</h3>
            <div className="language-grid">
              <div className="language-card">
                <div className="language-icon irish"></div>
                <h4>Irish (Gaeilge)</h4>
                <p>Immerse yourself in the rich traditions of Ireland</p>
              </div>
              <div className="language-card">
                <div className="language-icon scottish"></div>
                <h4>Scottish Gaelic (Gàidhlig)</h4>
                <p>Connect with the heritage of the Scottish Highlands</p>
              </div>
              <div className="language-card">
                <div className="language-icon welsh"></div>
                <h4>Welsh (Cymraeg)</h4>
                <p>Discover the living language of Wales</p>
              </div>
              <div className="language-card">
                <div className="language-icon breton"></div>
                <h4>Breton (Brezhoneg)</h4>
                <p>Explore the Celtic tongue of Brittany</p>
              </div>
            </div>
          </div>
          
          <div className="how-it-works">
            <h3>How Celtify Works</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Scan Your Environment</h4>
                <p>Point your camera at objects around you to trigger interactive AR experiences</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Learn Through Interaction</h4>
                <p>Engage with virtual elements that teach vocabulary, grammar, and pronunciation</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Practice with AI</h4>
                <p>Converse with our AI language coach that adapts to your learning pace</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h4>Track Your Progress</h4>
                <p>Earn achievements and see your fluency grow through our analytics dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;