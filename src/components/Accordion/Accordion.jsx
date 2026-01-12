import './Accordion.css';

import { HiOutlineMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';

const Accordion = ({ id, question, answer, handleAccordion, isOpen }) => {
  return (
    <div className='accordion-main-container'>
      <div className='accordion-container' onClick={() => handleAccordion(id)}>
        <p className='accordion-question'>{question}</p>
        {isOpen ? <HiOutlineMinus /> : <HiPlus />}
      </div>
      {isOpen && <p className='accordion-answer'>{answer}</p>}
    </div>
  );
};

export default Accordion;
