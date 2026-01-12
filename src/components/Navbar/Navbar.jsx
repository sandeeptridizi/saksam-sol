import './Navbar.css';

import companyLogo from '../../assets/company-logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src={companyLogo} alt='company logo' className='navbar-logo' />
      </Link>
      <ul className='nav-links-container'>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='about-us'>
          <li>About Us</li>
        </NavLink>
        <NavLink to='services'>
          <li className='services-link'>Services</li>
        </NavLink>
        <NavLink to='careers'>
          <li>Careers</li>
        </NavLink>
        <NavLink to='contact-us'>
          <li className='contact-link'>Contact Us</li>
        </NavLink>
      </ul>
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
    </div>
  );
};

export default Navbar;
