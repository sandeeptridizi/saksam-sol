import { FaRegCircleXmark } from 'react-icons/fa6';

const GetQuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-overlay-background' onClick={onClose}></div>
      <div className='modal-overlay-container'>
        <div className='modal-overlay-close-btn-container'>
          <button className='close-btn' onClick={onClose}>
            <FaRegCircleXmark />
          </button>
        </div>
        <h2 className='overlay-heading'>Get Quote</h2>
        <form className='modal-form'>
          <div className='modal-label-input-container'>
            <label className='label'>Name</label>
            <input
              type='text'
              placeholder='Enter Your Name'
              className='modal-input'
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Email</label>
            <input
              type='email'
              placeholder='Enter Your Email'
              className='modal-input'
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Phone</label>
            <input
              type='text'
              placeholder='Enter Your Phone Number'
              className='modal-input'
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Quote</label>
            <textarea
              rows={6}
              type='text'
              placeholder='Enter Your Quote'
              className='modal-text-input'
            ></textarea>
          </div>
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteModal;
