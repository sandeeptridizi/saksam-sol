import './Footer.css';

import companyLogo from '../../assets/company-logo.png';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className='footer-section-one-container'>
        <div className='footer-one-content-container'>
          <h3 className='footer-one-heading'>Fill Job Roles Instantly!</h3>
          <p className='footer-one-text'>
            Lorem ipsum dolor sit amet consectetur. Euismod faucibus tincidunt
            elementum cras mus amet fusce consectetur. Condimentum nisl proin.
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
              Lorem ipsum dolor sit amet consectetur. Eget habitant luctus at
              urna vitae non nunc elementum.
            </p>
            <div className='footer-two-links-container'>
              <span>About</span>
              <span>How it Works</span>
              <span>Reviews</span>
              <span>Pricing</span>
              <span>FAQ's</span>
              <span>Blog</span>
              <span>Careers</span>
              <span>Partnership</span>
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
