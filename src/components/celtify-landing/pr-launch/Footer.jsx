import React from 'react';
import '../../../styles/Footer.css';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  
  // Handler for links that don't exist yet
  const handleUnderConstructionClick = (e, pageName) => {
    e.preventDefault(); // Prevent the default anchor behavior
    if (onNavigate) {
      onNavigate(pageName); // Call the navigation function passed from App.jsx
    }
  };
  
  return (
    <footer className="site-footer">
      <div className="footer-decoration"></div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Celtify</h2>
            <p className="tagline">Preserving Celtic Languages Through Immersive Technology</p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-col">
              <h3>Product</h3>
              <ul>
                {/* These are anchor links, so they work as normal */}
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Resources</h3>
              <ul>
                {/* These links would go to pages that don't exist yet */}
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'celtic-history')}>Celtic History</a></li>
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'language-guides')}>Language Guides</a></li>
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'community')}>Community</a></li>
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'blog')}>Development Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Company</h3>
              <ul>
                {/* More under construction links */}
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'about-company')}>About Us</a></li>
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'careers')}>Careers</a></li>
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'contact')}>Contact</a></li>
                <li><a href="#" onClick={(e) => handleUnderConstructionClick(e, 'privacy')}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest news and updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="subscribe-btn" onClick={(e) => handleUnderConstructionClick(e, 'subscribe')}>Subscribe</button>
            </div>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-icon facebook" aria-label="Facebook" 
               onClick={(e) => handleUnderConstructionClick(e, 'facebook')}></a>
            <a href="#" className="social-icon twitter" aria-label="Twitter"
               onClick={(e) => handleUnderConstructionClick(e, 'twitter')}></a>
            <a href="#" className="social-icon instagram" aria-label="Instagram"
               onClick={(e) => handleUnderConstructionClick(e, 'instagram')}></a>
            <a href="#" className="social-icon linkedin" aria-label="LinkedIn"
               onClick={(e) => handleUnderConstructionClick(e, 'linkedin')}></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Celtify. All rights reserved.</p>
          <div className="legal-links">
            <a href="#" onClick={(e) => handleUnderConstructionClick(e, 'terms')}>Terms of Service</a>
            <a href="#" onClick={(e) => handleUnderConstructionClick(e, 'privacy')}>Privacy Policy</a>
            <a href="#" onClick={(e) => handleUnderConstructionClick(e, 'cookies')}>Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <div className="celtic-pattern"></div>
    </footer>
  );
};

export default Footer;