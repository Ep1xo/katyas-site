import React, { useState } from 'react';

const FaqBlock = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}question`} onClick={toggle}>
      <div className="faq-question">
        <h5>{question}</h5>
        <img
          src={isOpen ? '/icons/remove_circle.png' : '/icons/add_circle.png'}
          alt="toggle icon" draggable="false"
        />
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FaqBlock;