import { useState } from 'react';
import '../../../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "What makes your Celtic language translation tool different?",
      answer: "Our solution is the first to combine AI-powered Celtic language recognition with immersive VR experiences. Unlike existing translation tools that lack cultural context, our technology focuses specifically on Celtic languages with attention to context, syntax, handwriting and cultural nuances, creating a uniquely accurate and culturally sensitive translation experience."
    },
    {
      question: "Which Celtic languages does your platform support?",
      answer: "We currently support Irish (Gaeilge), Scottish Gaelic (Gàidhlig), and Welsh (Cymraeg). We're actively working on expanding to include other Celtic languages like Cornish (Kernowek) and Breton (Brezhoneg) in future updates."
    },
    {
      question: "What equipment do I need to use the VR Celtic experience?",
      answer: "Our VR simulation requires a standard VR headset. The translation tools can be accessed through our application on various devices, but for the full immersive experience of exploring ancient Celtic cities, we recommend using a compatible VR headset with motion controllers."
    },
    {
      question: "How historically accurate are the virtual Celtic environments?",
      answer: "We've worked with historians, linguists, and cultural experts to create the most historically accurate reconstructions possible of ancient Celtic cities like Dublin, Galway, and Edinburgh. Our environments reflect authentic medieval everyday life and cultural contexts to enhance both the learning experience and cultural preservation."
    },
    {
      question: "How does the AI translation technology work?",
      answer: "Our AI has been specifically trained on Celtic languages to understand their unique structures, contexts, and cultural references. It processes text and speech inputs, analyzes them for meaning and cultural context, and provides translations that preserve the cultural integrity of these endangered languages."
    },
    {
      question: "Will there be a free version of the translation tool?",
      answer: "Yes! We will offer a free tier with access to basic translation features for all supported Celtic languages. Premium features like the full VR immersive experiences, advanced cultural context translations, and educational institution resources will be available through subscription options."
    },
    {
      question: "Who can benefit from this technology?",
      answer: "Our platform serves multiple audiences including the Celtic diaspora and language learners worldwide, educational institutions and cultural organizations, and government bodies and businesses in Celtic regions. It's designed for anyone interested in learning, preserving, or working with Celtic languages in an immersive, culturally authentic way."
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