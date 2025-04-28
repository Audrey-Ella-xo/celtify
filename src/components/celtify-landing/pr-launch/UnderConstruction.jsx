import React from 'react';
import '../../../styles/UnderConstruction.css';

const UnderConstruction = ({ onReturnHome }) => {
  // Use window.history instead of React Router's navigate
  const handleGoBack = () => {
    window.history.back();
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="under-construction-container">
      <div className="construction-content">
        <div className="construction-decoration top"></div>
        
        <div className="construction-icon"></div>
        
        <h1>Coming Soon</h1>
        
        <p className="construction-message">
          We're working on something magical for this page.
          <br />
          Check back soon to discover more Celtic wonders!
        </p>
        
        <div className="construction-actions">
          <button className="back-button" onClick={handleGoBack}>
            Return to Previous Page
          </button>
          
          <button className="home-button" onClick={goToHome}>
            Back to Home
          </button>
        </div>
        
        <div className="construction-decoration bottom"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;