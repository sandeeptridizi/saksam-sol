import './Footer.css';

import companyLogo from '../../assets/company-logo.png';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import rectangle11 from '../../assets/left-rectangle11.png';
import rectangle88 from '../../assets/rectangle88.png';

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className='footer-section-one-container'>
        <div className='footer-one-content-container'>
          <h3 className='footer-one-heading'>
            Let’s Build Your Dream Team Together
          </h3>
          <p className='footer-one-text'>
            Whether you’re looking to hire top talent, scale your workforce
            quickly, or streamline recruitment processes, SakSam Sol is your
            trusted staffing partner. Stay updated with the latest hiring
            solutions, industry insights, and workforce strategies by
            subscribing to our newsletter.
          </p>
          <div className='footer-one-email-btn-container'>
            <input
              type='text'
              placeholder='Your Email address'
              className='email-input'
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
                <Link to='/services/continget-staffing'>
                  Contingent Staffing
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
              <PiLinkedinLogoBold className='footer-two-icon' />
              <BsInstagram className='footer-two-icon' />
              <RiFacebookCircleLine className='footer-two-icon' />
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
    </div>
  );
};

export default Footer;
