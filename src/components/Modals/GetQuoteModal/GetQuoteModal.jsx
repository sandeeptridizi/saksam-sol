import { useState } from 'react';
import { FaRegCircleXmark } from 'react-icons/fa6';

const GetQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quote: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

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
        <form className='modal-form' onSubmit={handleSubmit}>
          <div className='modal-label-input-container'>
            <label className='label'>Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              placeholder='Enter Your Name'
              className='modal-input'
              onChange={handleChange}
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              placeholder='Enter Your Email'
              className='modal-input'
              onChange={handleChange}
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Phone</label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              placeholder='Enter Your Phone Number'
              className='modal-input'
              onChange={handleChange}
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Quote</label>
            <textarea
              rows={6}
              type='text'
              name='quote'
              value={formData.quote}
              placeholder='Enter Your Quote'
              className='modal-text-input'
              onChange={handleChange}
            ></textarea>
          </div>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteModal;
