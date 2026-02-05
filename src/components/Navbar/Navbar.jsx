import './Navbar.css';

import companyLogo from '../../assets/company-logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const location = useLocation();

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setIsHamburgerOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src={companyLogo} alt='company logo' className='navbar-logo' />
      </Link>

      <div className='nav-container'>
        <ul className='nav-links-container'>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/about-us' className={({ isActive }) => isActive ? 'nav-active' : ''}>
              About Us
            </NavLink>
          </li>

          {/* SERVICES */}
          <li className='services-link' ref={servicesRef}>
            <span onClick={() => setIsServicesOpen(!isServicesOpen)}>
              Services
            </span>

            {isServicesOpen && (
              <div className='services-links-container show-links'>
                <NavLink to='/services/staff-augmentation'>
                  <span>Staff Augmentation</span>
                </NavLink>
                <NavLink to='/services/permenant-staffing'>
                  <span>Permenant Staffing</span>
                </NavLink>
                <NavLink to='/services/bulk-hiring'>
                  <span>Bulk Hiring</span>
                </NavLink>
                <NavLink to='/services/recruitment-process'>
                  <span>Recruitment Process Outsourcing</span>
                </NavLink>
                <NavLink to='/services/payroll-services'>
                  <span>Payroll Services</span>
                </NavLink>
              </div>
            )}
          </li>

          <li>
            <NavLink to='/careers' className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Careers
            </NavLink>
          </li>

          <li className='contact-link'>
            <NavLink to='/contact-us'>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* HAMBURGER */}
        <div
          className='hamburger-container'
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* MOBILE MENU */}
      {isHamburgerOpen && (
        <ul className='nav-mobile-links-container'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>
            <li>Home</li>
          </NavLink>

          <NavLink to='/about-us' className={({ isActive }) => isActive ? 'nav-active' : ''}>
            <li>About Us</li>
          </NavLink>

          <li className='services-link'>
            <span onClick={() => setIsServicesOpen(!isServicesOpen)}>
              Services
            </span>

            {isServicesOpen && (
              <div className='services-links-container show-links'>
                <NavLink to='/services/staff-augmentation'>
                  <span>Staff Augmentation</span>
                </NavLink>
                <NavLink to='/services/permenant-staffing'>
                  <span>Permenant Staffing</span>
                </NavLink>
                <NavLink to='/services/bulk-hiring'>
                  <span>Bulk Hiring</span>
                </NavLink>
                <NavLink to='/services/recruitment-process'>
                  <span>Recruitment Process Outsourcing</span>
                </NavLink>
                <NavLink to='/services/payroll-services'>
                  <span>Payroll Services</span>
                </NavLink>
              </div>
            )}
          </li>

          <NavLink to='/careers' className={({ isActive }) => isActive ? 'nav-active' : ''}>
            <li>Careers</li>
          </NavLink>

          <NavLink to='/contact-us'>
            <li className='contact-link'>Contact Us</li>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
