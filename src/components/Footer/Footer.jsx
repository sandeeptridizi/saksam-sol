import './Footer.css';

import companyLogo from '../../assets/company-logo.png';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import rectangle11 from '../../assets/left-rectangle11.png';
import rectangle88 from '../../assets/rectangle88.png';
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      email: formData.email,
      name: 'NA',
      phone: 'NA',
      message: 'NA',
      time: new Date().toLocaleString(),
      reference: 'Footer Email Subscription',
    };
    emailjs
      .send('default_service', 'template_jyvqfum', templateParams)
      .then((result) => {
        console.log(result.text);
        toast.success('Email subscribed successfully');
        setFormData({ email: '' });
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Email subscription failed');
        setFormData({ email: '' });
      });
  };

  return (
    <form className='footer-main-container' onSubmit={handleSubmit}>
      <div className='footer-section-one-container'>
        <div className='footer-one-content-container'>
          <h3 className='footer-one-heading'>
            Let’s Build Your Dream Team Together
          </h3>
          <p className='footer-one-text'>
            Whether you’re looking to hire top talent, scale your workforce
            quickly, or streamline recruitment processes, Saksam Sol is your
            trusted staffing partner. Stay updated with the latest hiring
            solutions, industry insights, and workforce strategies by
            subscribing to our newsletter.
          </p>
          <div className='footer-one-email-btn-container'>
            <input
              type='text'
              placeholder='Your Email address'
              className='email-input'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <button className='footer-one-btn'>
              Get Free Employer Account
            </button>
          </div>
        </div>
        <img src={rectangle88} alt='rectangle 88' className='rectangle-88' />
        <img src={rectangle11} alt='rectangle 11' className='rectangle-11' />
      </div>
      <div className='footer-section-two-container'>
        <div className='footer-two-content-social-media-container'>
          <div className='footer-two-content-container'>
            <img
              src={companyLogo}
              alt='company logo'
              className='company-logo'
            />
            <p className='footer-two-content-text'>
              Building careers. Delivering talent. Powering growth for your
              business.
            </p>
            <div className='footer-two-links-container'>
              <span>
                <Link to='about-us'>About Us</Link>
              </span>
              <span>
                <Link to='/services/staff-augmentation'>
                  Staff Augmentation
                </Link>
              </span>
              <span>
                <Link to='/services/permenant-staffing'>
                  Permenant Staffing
                </Link>
              </span>
              <span>
                <Link to='/services/bulk-hiring'>Bulk Hiring</Link>
              </span>
              <span>
                <Link to='/services/payroll-services'>Payroll Services</Link>
              </span>
              <span>
                <Link to='/services/recruitment-process'>RPO</Link>
              </span>
              <span>
                <Link to='careers'>Careers</Link>
              </span>
              <span>
                <Link to='contact-us'>Contact Us</Link>
              </span>
            </div>
          </div>
          <div className='footer-two-social-media-container'>
            <h3 className='footer-two-social-media-heading'>Follow Us</h3>
            <div className='footer-two-social-media-links-container'>
              <Link to='https://www.linkedin.com/company/Saksam-sol/'>
                <PiLinkedinLogoBold className='footer-two-icon' />
              </Link>
               <Link to='https://www.facebook.com/profile.php?id=61552252253137&sk=directory_intro'>
                <FaFacebook className='footer-two-icon' />
              </Link>
            </div>
          </div>
        </div>
        <div className='footer-section-two-footer'>
          <p className='footer-copy-right'>
            © 2026 Saksam Sol. All rights reserved.
          </p>
          <div className='footer-section-two-links-container'>
            <Link to='privacy-policy'>
              <span className='privacy-footer-link'>Privacy Policy</span>
            </Link>
            <div className='line-container'></div>
            <Link to='terms-conditions'>
              <span className='privacy-footer-link'>Terms & Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Footer;
