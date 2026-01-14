import './Navbar.css';

import companyLogo from '../../assets/company-logo.png';
import { Link, NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src={companyLogo} alt='company logo' className='navbar-logo' />
      </Link>
      <div className='nav-container'>
        <ul className='nav-links-container'>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='about-us'>
            <li>About Us</li>
          </NavLink>
          <li className='services-link'>
            <NavLink to='services'>Services</NavLink>
            <div className='services-links-container'>
              <NavLink to='/services'>
                <span>Continget Staffing</span>
              </NavLink>
              <NavLink to='/services/permenant-staffing'>
                <span>permenant-staffing</span>
              </NavLink>
              <NavLink to='/services/bulk-hiring'>
                <span>Bulk Hiring</span>
              </NavLink>
              <NavLink to='/services/payroll-services'>
                <span>Payroll Services</span>
              </NavLink>
              <NavLink to='/services/recruitment-process'>
                <span>Recruitment Process</span>
              </NavLink>
            </div>
          </li>
          <NavLink to='careers'>
            <li>Careers</li>
          </NavLink>
          <NavLink to='contact-us'>
            <li className='contact-link'>Contact Us</li>
          </NavLink>
        </ul>
        <div
          className='hamburger-container'
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {isHamburgerOpen && (
        <ul className='nav-mobile-links-container'>
          <NavLink to='/' onClick={() => setIsHamburgerOpen(false)}>
            <li>Home</li>
          </NavLink>
          <NavLink to='about-us' onClick={() => setIsHamburgerOpen(false)}>
            <li>About Us</li>
          </NavLink>
          <NavLink to='services' onClick={() => setIsHamburgerOpen(false)}>
            <li className='services-link'>Services</li>
          </NavLink>
          <NavLink to='careers' onClick={() => setIsHamburgerOpen(false)}>
            <li>Careers</li>
          </NavLink>
          <NavLink to='contact-us' onClick={() => setIsHamburgerOpen(false)}>
            <li className='contact-link'>Contact Us</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
