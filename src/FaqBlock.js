import React, { useRef, useState, useEffect } from 'react';

const FaqBlock = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);

  return (
    <div className="faq-item" onClick={toggle}>
      <div className="faq-question">
        <h5>{question}</h5>
        <img
          src={isOpen ? `${process.env.PUBLIC_URL}/icons/remove_circle.png` : `${process.env.PUBLIC_URL}/icons/add_circle.png`}
          alt="toggle icon"
          draggable="false"
        />
      </div>
      <div
        className="faq-answer-wrapper"
        ref={contentRef}
        style={{
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
          maxHeight: '0px',
        }}
      >
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

export default FaqBlock;
