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
    const { name, email, phone, message } = formData;
    const formattedBody = `Get in touch with us\nWe strive to respond to all inquiries within 48 hours.\n\nYour name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nYour message: ${message}`;
    const templateParams = {
      name,
      email,
      phone,
      message,
      formattedBody,
      time: new Date().toLocaleString(),
      reference: "Careers - Get in touch",
    };

    emailjs
      .send("default_service", "template_jyvqfum", templateParams)
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully");
        setFormData({ name: '', email: '', phone: '', message: '' });
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
        <h2 className='overlay-heading'>Get in touch with us</h2>
        <p className='overlay-subtitle'>We strive to respond to all inquiries within 48 hours.</p>
        <form className='modal-form' onSubmit={handleSubmit}>
          <div className='modal-label-input-container'>
            <label className='label'>Your name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              placeholder='Your name'
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
              placeholder='Email'
              className='modal-input'
              onChange={handleChange}
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Phone Number</label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              placeholder='Phone Number'
              className='modal-input'
              onChange={handleChange}
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Your message</label>
            <textarea
              rows={6}
              type='text'
              name='message'
              value={formData.message}
              placeholder='Your message'
              className='modal-text-input'
              onChange={handleChange}
            ></textarea>
          </div>
          <button type='submit' className='submit-btn'>
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouchModal;
