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

function App() {
  // State for animations and interactions
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">Celtify</div>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><button className="cta-button">Join Waitlist</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <AboutProduct />
        <DemoPreview />
        <Countdown launchDate="2025-06-30T00:00:00" />
        <Team />
        <FAQ />
        <EmailSignup />
      </main>

      <Footer />
    </div>
  );
}

export default App;