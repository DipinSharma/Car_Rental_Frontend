import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`question ${isOpen?"show":""}`} onClick={toggleOpen}>
        <h3>{question}</h3>
      </div>
      <div className={`answer ${isOpen?"show":""}`}><p>{answer}</p></div>
    </div>
  );
};

export default FAQItem;