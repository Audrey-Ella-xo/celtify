import { useState, useEffect } from 'react';
import '../../../styles/Countdown.css';

const Countdown = ({ launchDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(launchDate) - new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });

  // Function to scroll to email signup section
  const scrollToEmailSignup = () => {
    const emailSignupSection = document.getElementById('email-signup');
    if (emailSignupSection) {
      emailSignupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <h2>Launching Soon</h2>
        <p>Get ready to embark on your Celtic language journey</p>
        
        <div className="countdown-timer">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
        
        <button className="notify-button" onClick={scrollToEmailSignup}>Notify Me at Launch</button>
      </div>
      
      <div className="countdown-background">
        {/* This could be an animated background with Celtic imagery */}
      </div>
    </section>
  );
};

export default Countdown;