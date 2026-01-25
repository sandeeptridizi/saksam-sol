import { useState } from 'react';
import './GetInTouchModal.css';
import emailjs from '@emailjs/browser';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const GetInTouchModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString(),
      reference: "Get In Touch Modal",
    };

    emailjs
      .send("default_service", "template_jyvqfum", templateParams)
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully");
        onClose();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Message sending failed");
        onClose();
      });
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
        <h2 className='overlay-heading'>Get In Touch</h2>
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
            <label className='label'>Message</label>
            <textarea
              rows={6}
              type='text'
              name='message'
              value={formData.message}
              placeholder='Enter Your Message'
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

export default GetInTouchModal;
