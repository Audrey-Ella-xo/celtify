import { useState } from 'react';
import '../../../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "What makes Celtify different from other language learning apps?",
      answer: "Celtify is the first language learning platform to combine augmented reality, artificial intelligence, and gamification specifically for Celtic languages. Unlike traditional apps that rely on flashcards and text-based learning, Celtify places language acquisition in the real world through AR technology, creating immersive and contextual learning experiences."
    },
    {
      question: "Which Celtic languages does Celtify support?",
      answer: "At launch, Celtify will support Irish (Gaeilge), Scottish Gaelic (Gàidhlig), Welsh (Cymraeg), and Breton (Brezhoneg). We plan to add Manx and Cornish in future updates as we expand our language offerings."
    },
    {
      question: "Do I need special equipment to use Celtify?",
      answer: "Celtify works on standard smartphones and tablets with AR capabilities. Most devices manufactured in the last 3-4 years support AR functionality. For the best experience, we recommend devices with ARKit (iOS) or ARCore (Android) support."
    },
    {
      question: "Can I use Celtify without internet connection?",
      answer: "The core AR functionality of Celtify requires an internet connection for the first use to download language data. After initial setup, basic lessons can be used offline, but advanced features like AI pronunciation coaching and community features will require connectivity."
    },
    {
      question: "How does the AI pronunciation coach work?",
      answer: "Our AI coach uses advanced speech recognition algorithms specifically trained on Celtic language phonetics. It analyzes your pronunciation in real-time, providing visual feedback on accuracy and offering suggestions for improvement based on native speaker patterns."
    },
    {
      question: "Will there be a free version of Celtify?",
      answer: "Yes! Celtify will offer a free tier with access to basic lessons in all supported languages. Premium features like advanced AI coaching, unlimited AR experiences, and cultural deep dives will be available through subscription options."
    }
  ];
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">
          Have questions about Celtify? Find answers to the most common questions below.
        </p>
        
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-toggle">
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-questions">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Please reach out to our support team.</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;