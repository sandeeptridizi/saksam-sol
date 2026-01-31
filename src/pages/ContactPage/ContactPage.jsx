import Accordion from '../../components/Accordion/Accordion';
import useAppContext from '../../context/AppContext';
import './ContactPage.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { ImTwitter } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa6';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const { faqsData, handleAccordion } = useAppContext();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString(),
      reference: 'Contact Page Form Submission',
    };
    emailjs
      .send('default_service', 'template_jyvqfum', templateParams)
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully');
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Message sending failed');
      });
  };

  return (
    <div>
      <div className='foundersheading'>
        <span className='foundershead'>Contact Us</span> <br></br>
        <span className='foundersdesc'>
          Any question or remarks? Just write us a message!
        </span>
      </div>
      <div className='contactus'>
        <div className='contactinfo'>
          <div className='contactheading'>
            <span className='contacttitle'>Contact Information</span> <br></br>
            <span className='contacctdesc'>
              Say Something to connect with us directly
            </span>
            <ul className='contactdetails'>
              <li className='contactplace'>
                <div className='contacticon'>
                  <FaPhoneVolume />
                </div>{' '}
                <span>+91 9398906639 | +91 9849668819</span>
              </li>
              <li className='contactplace'>
                <div className='contacticon'>
                  <MdMail />
                </div>{' '}
                <span>info@saksamsol.com</span>
              </li>
              <li className='contactplace'>
                <div className='contacticon'>
                  <FaLocationDot />
                </div>{' '}
                <span>Hitech City, Madhapur, Hyderabad - 500084</span>
              </li>
            </ul>
            <ul className='socialmedia'>
              <Link to='https://www.linkedin.com/company/saksam-sol/'>
                <li className='socialmediaicon1'>
                  <PiLinkedinLogoBold />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <form className='contactform' onSubmit={handleSubmit}>
          <div className='contactrow'>
            <div className='input-box'>
              <label>First Name</label>
              <input
                type='text'
                placeholder='Enter your First Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='input-box'>
              <label>Last Name</label>
              <input
                type='text'
                placeholder='Enter your Last Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='contactrow'>
            <div className='input-box'>
              <label>Email Address</label>
              <input
                type='text'
                placeholder='Enter your Email Address'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='input-box'>
              <label>Phone Number</label>
              <input
                type='text'
                placeholder='Enter your Phone Number'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='subjectdiv'>
            <span className='subjectselector'>Select Subject</span>
            <ul className='subjects'>
              <li className='subjectname'>
                {' '}
                <input type='radio'></input> Contigent Staffing{' '}
              </li>
              <li className='subjectname'>
                <input type='radio'></input> Permenant Staffing{' '}
              </li>
              <li className='subjectname'>
                <input type='radio'></input> Payroll Services{' '}
              </li>{' '}
              <br></br>
              <li className='subjectname'>
                <input type='radio'></input> Recruitment Process
                Oursourcing{' '}
              </li>
              <li className='subjectname'>
                <input type='radio'></input> Bulk Hiring{' '}
              </li>
            </ul>
          </div>
          <div className='message-box'>
            <label>Message</label>
            <input
              type='text'
              placeholder='Write your Message..'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className='submitbutton'>Send Message</button>
        </form>
      </div>
      <div className='career-page-faqs-container'>
        <div className='career-page-faqs'>
          {faqsData.map((item) => (
            <Accordion
              key={item.id}
              {...item}
              handleAccordion={handleAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
