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
          
          {/* <div className="languages-covered">
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
          </div> */}
          <div className="languages-covered">
            <h3>Celtic Languages You'll Learn</h3>
            
            <div className="pioneered-language">
              <div className="language-card featured">
                <div className="language-icon irish"></div>
                <div className="language-content">
                  <h4>Irish (Gaeilge)</h4>
                  <p>Immerse yourself in the rich traditions of Ireland</p>
                  <span className="pioneer-badge">Pioneer Language</span>
                </div>
              </div>
            </div>
            
            <div className="upcoming-languages">
              <h4 className="coming-soon-title">Future Languages Coming Soon</h4>
              <div className="language-grid">
                <div className="language-card future">
                  <div className="language-icon scottish"></div>
                  <h4>Scottish Gaelic (Gàidhlig)</h4>
                  <p>Connect with the heritage of the Scottish Highlands</p>
                </div>
                <div className="language-card future">
                  <div className="language-icon welsh"></div>
                  <h4>Welsh (Cymraeg)</h4>
                  <p>Discover the living language of Wales</p>
                </div>
                <div className="language-card future">
                  <div className="language-icon breton"></div>
                  <h4>Breton (Brezhoneg)</h4>
                  <p>Explore the Celtic tongue of Brittany</p>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="how-it-works">
            <h3>How Our VR Celtic Experience Works</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Enter Virtual Celtic Cities</h4>
                <p>Explore historically accurate environments like ancient Dublin, Galway, or Edinburgh</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Speak in English</h4>
                <p>Our VR simulation captures your speech and processes it through our specialized AI</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>See & Hear Celtic Translations</h4>
                <p>Experience real-time translation into your chosen Celtic language with cultural context</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h4>Interact with Virtual Environment</h4>
                <p>Engage with adaptive NPCs who respond to your prompts in authentic Celtic languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;