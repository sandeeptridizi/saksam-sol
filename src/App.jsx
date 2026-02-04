import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

import ContingetStaffing from './pages/ServicesPage/ContingetStaffing/ContingetStaffing';
import PermenantStaffing from './pages/ServicesPage/PermenantStaffing/PermenantStaffing';
import BulkHiring from './pages/ServicesPage/BulkHiring/BulkHiring';
import PayrollServices from './pages/ServicesPage/PayrollServices/PayrollServices';
import RecruitmentProcess from './pages/ServicesPage/RecruitmentProcess/RecruitmentProcess';
// import CareersPage from './pages/CareersPage/CareersPage';
import Careers from './components/Career/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import ContactPage from './pages/ContactPage/ContactPage';
import Login from './pages/Login/Login';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GetInTouchModal from './components/Modals/GetInTouchModal/GetInTouchModal';

import CareerCreation from './components/careerCreation/careerCreation';
import SmallCard from './components/managingCareers/managingCareers';
import CareerUpdate from './components/careerCreation/updationCareerpage';
import { initEmailjs } from './lib';
import { useEffect, useState } from 'react';

export default function App() {
  const [showContact, setShowContact] = useState(false);

  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  useEffect(() => {
    initEmailjs();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<AboutPage />} />

          <Route
            path='/services/staff-augmentation'
            element={<ContingetStaffing />}
          />
          <Route
            path='/services/permenant-staffing'
            element={<PermenantStaffing />}
          />
          <Route path='/services/bulk-hiring' element={<BulkHiring />} />
          <Route
            path='/services/payroll-services'
            element={<PayrollServices />}
          />
          <Route
            path='/services/recruitment-process'
            element={<RecruitmentProcess />}
          />

          {/* <Route path='careers' element={<CareersPage />} /> */}
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />

          <Route
            path='/careers'
            element={<Careers onOpenContact={openContact} />}
          />
          <Route path='terms-conditions' element={<TermsConditions />} />
          <Route path='contact-us' element={<ContactPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path='/createCareer' element={<CareerCreation />} />
          <Route path='/managecareers' element={<SmallCard />} />
          <Route path='/career-update' element={<CareerUpdate />} />
        </Route>
      </Routes>
      <GetInTouchModal isOpen={showContact} onClose={closeContact} />
    </BrowserRouter>
  );
}

const AdminLayout = () => {
  return (
    <div style={{}}>
      <Outlet />
    </div>
  );
};

// psowmya543@gmail.com
// tambulam@125
