import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/celtify-landing/pr-launch/Hero';
import Features from './components/celtify-landing/pr-launch/Features';
import AboutProduct from './components/celtify-landing/pr-launch/AboutProduct';
import Team from './components/celtify-landing/pr-launch/Team';
import Countdown from './components/celtify-landing/pr-launch/Countdown';
import EmailSignup from './components/celtify-landing/pr-launch/EmailSignup';
import FAQ from './components/celtify-landing/pr-launch/FAQ';
import DemoPreview from './components/celtify-landing/pr-launch/DemoPreview';
import Footer from './components/celtify-landing/pr-launch/Footer';
import UnderConstruction from './components/celtify-landing/pr-launch/UnderConstruction';

function App() {
  // State for animations and interactions
  const [isScrolled, setIsScrolled] = useState(false);
  // State to determine if we should show the main content or the "under construction" page
  const [currentPage, setCurrentPage] = useState('home');
  
  // Handle scroll events for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to scroll to email signup section
  const scrollToEmailSignup = () => {
    const emailSignupSection = document.getElementById('email-signup');
    if (emailSignupSection) {
      emailSignupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle navigation to unfinished pages
  const handleNavigation = (page) => {
    if (page === 'home') {
      // Go to home page
      setCurrentPage('home');
      // Scroll to top
      window.scrollTo(0, 0);
    } else {
      // Show under construction page
      setCurrentPage(page);
    }
  };
  
  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo"onClick={() => setCurrentPage('home')}>Celtify</div>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><button className="cta-button" onClick={scrollToEmailSignup}>Join Waitlist</button></li>
          </ul>
        </nav>
      </header>
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features id="features" />
            <AboutProduct id="about" />
            <DemoPreview />
            <Countdown launchDate="2025-07-30T00:00:00" />
            <Team id="team" />
            <FAQ id="faq" />
            <EmailSignup id="email-signup" />
          </>
        ) : (
          <UnderConstruction onReturnHome={() => handleNavigation('home')} />
      )}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;