import './PostJobModal.css';

import { FaRegCircleXmark } from 'react-icons/fa6';

const PostJobModal = ({ isOpen, onClose }) => {
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
        <h2 className='overlay-heading'>Post A Job</h2>
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
            <label className='label'>Job Description</label>
            <textarea
              rows={6}
              type='text'
              placeholder='Job Description...'
              className='modal-text-input'
            ></textarea>
          </div>
          <div className='modal-btn-container'>
            <button className='modal-cancel-btn' onClick={onClose}>
              Cancel
            </button>
            <button className='modal-submit-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobModal;
