import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

import ContingetStaffing from './pages/ServicesPage/ContingetStaffing/ContingetStaffing';
import PermenantStaffing from './pages/ServicesPage/PermenantStaffing/PermenantStaffing';
import BulkHiring from './pages/ServicesPage/BulkHiring/BulkHiring';
import PayrollServices from './pages/ServicesPage/PayrollServices/PayrollServices';
import RecruitmentProcess from './pages/ServicesPage/RecruitmentProcess/RecruitmentProcess';
import CareersPage from './pages/CareersPage/CareersPage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import ContactPage from './pages/ContactPage/ContactPage';
import Login from './pages/Login/Login';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<AboutPage />} />

          <Route
            path='/services/continget-staffing'
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

          <Route path='careers' element={<CareersPage />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms-conditions' element={<TermsConditions />} />
          <Route path='contact-us' element={<ContactPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// psowmya543@gmail.com
// tambulam@125
