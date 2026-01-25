import { useState } from 'react';
import './PostJobModal.css';
import emailjs from '@emailjs/browser';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const PostJobModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      jobDescription: formData.jobDescription,
      time: new Date().toLocaleString(),
      reference: "Post Job Modal",
    };
    emailjs
      .send("default_service", "template_jyvqfum", templateParams)
      .then((result) => {
        console.log(result.text);
        toast.success("Job posted successfully");
        onClose();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Job posting failed");
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
        <h2 className='overlay-heading'>Post A Job</h2>
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
              value={FormData.email}
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
              value={FormData.phone}
              placeholder='Enter Your Phone Number'
              className='modal-input'
              onChange={handleChange}
            />
          </div>
          <div className='modal-label-input-container'>
            <label className='label'>Job Description</label>
            <textarea
              rows={6}
              type='text'
              name='jobDescription'
              value={FormData.jobDescription}
              placeholder='Job Description...'
              className='modal-text-input'
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='modal-btn-container'>
            <button className='modal-cancel-btn' onClick={onClose}>
              Cancel
            </button>
            <button type='submit' className='modal-submit-btn'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobModal;
