import { useState } from 'react';
import '../../../styles/EmailSignup.css';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    
    // Show success state
    setSubmitted(true);
    setError('');
  };
  
  return (
    <section id="email-signup" className="email-signup-section">
      <div className="signup-container">
        <h2>Stay in the Loop</h2>
        <p>Be the first to know when Celtify launches and receive exclusive early access benefits</p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={error ? 'error' : ''}
              />
              <button type="submit" className="submit-button">
                Join Waitlist
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <p className="privacy-note">We respect your privacy and will never share your information.</p>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>You're on the list!</h3>
            <p>Thank you for your interest in Celtify. We'll keep you updated on our progress.</p>
          </div>
        )}
      </div>
      
      <div className="benefits-list">
        <h3>Waitlist Benefits:</h3>
        <ul>
          <li>Early access to the Celtify beta</li>
          <li>30% discount on premium features</li>
          <li>Exclusive behind-the-scenes development updates</li>
          <li>Opportunity to provide feedback and shape the final product</li>
        </ul>
      </div>
    </section>
  );
};

export default EmailSignup;