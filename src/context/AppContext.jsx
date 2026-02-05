import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const faqs = [
  {
    id: 1,
    question: 'What industries do you serve?',
    answer:
      'We provide staffing solutions across all sectors including IT, Non-IT, Healthcare, Manufacturing, Retail, BFSI, and more.',
    isOpen: false,
  },
  {
    id: 2,
    question: 'What types of staffing services do you offer?',
    answer:
      'We specialize in Permanent Hiring, Contingent Staffing, RPO, Bulk Hiring, and Payroll Management for organizations of all sizes.',
    isOpen: false,
  },
  {
    id: 3,
    question: 'How quickly can you provide candidates?',
    answer:
      'Depending on the role, we can deliver pre-screened candidates within hours for urgent hiring and within days for niche positions.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Do you handle compliance and payroll for contigent staff?',
    answer:
      'Yes, we manage payroll, statutory compliance, and documentation for contingent staff, ensuring a hassle-free process.',
    isOpen: false,
  },
  {
    id: 5,
    question: 'Can you support large-volume hiring projects?',
    answer:
      'Absolutely. Our team has experience in bulk hiring and RPO projects, efficiently scaling your workforce as per requirements.',
    isOpen: false,
  },
  {
    id: 6,
    question: 'How do you ensure quality candidates?',
    answer:
      'We follow a structured process with screening, verification, and skill assessment to ensure every candidate meets your expectations.',
    isOpen: false,
  },
];

const carouselData = [
  {
    id: 1,
    title: 'Staff Augmentation',
    list: [
      'On-demand access to skilled professionals across technology and business roles.',
      'Quickly scale teams without long-term hiring commitments.',
      'Flexible engagement models: short-term, long-term, or project-based.',
      'Reduced hiring risk while maintaining full operational control.',
      'Accelerates delivery with ready-to-deploy talent.',
    ],
    link: '/services/staff-augmentation',
  },
  {
    id: 2,
    title: 'Permanant Staffing',
    list: [
      'Focuses on delivering long-term employees who align with both skill expectations and organizational culture..',
      'Provides a structured hiring process with expert sourcing, screening, interviews, and final coordination.',
      'Uses strong industry networks to speed up closures across IT, Non-IT, and niche roles',
    ],
    link: '/services/permenant-staffing',
  },
  {
    id: 3,
    title: 'Recruitment Process Outsourcing',
    list: [
      'Complete ownership of your end-to-end recruitment lifecycle.',
      'Strategic talent sourcing using data-driven, multi-channel hiring methods.',
      'Faster time-to-hire with dedicated recruiters and optimized workflows.',
      'High-quality candidate screening aligned to skills, culture, and role fit.',
      'Cost-effective, scalable hiring solution that grows with your business.',
    ],
    link: '/services/recruitment-process',
  },
  {
    id: 4,
    title: 'Bulk Hiring',
    list: [
      'High-volume hiring for 10s, 100s, or 1000s of candidates with speed and accuracy.',
      'Ideal for BPOs, call centers, operations, and large-scale projects.',
      'Rapid workforce deployment for short-term, long-term, or seasonal needs.',
      'End-to-end hiring, onboarding, and workforce coordination handled seamlessly.',

    ],
    link: '/services/bulk-hiring',
  },
  {
    id: 5,
    title: 'Payroll Services',
    list: [
      'End-to-end payroll processing and workforce management.',
      'Employer of Record (EoR) with complete statutory compliance.',
      'Management of PF, ESI, PT, TDS, and labor law requirements.',
      'Fast onboarding, bulk payroll support, and accurate salary disbursement.',
      'Transparent billing with audit-ready payroll documentation.',
    ],
    link: '/services/payroll-services',
  },
];

export const AppContextProvider = ({ children }) => {
  const [faqsData, setfaqsData] = useState(faqs);
  const [isGetInTouchModalOpen, setIsGetInTouchModalOpen] = useState(false);
  const [isGetQuoteModalOpen, setIsGetQuoteModalOpen] = useState(false);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);

  const handleAccordion = (id) => {
    const filteredData = faqsData.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item,
    );
    setfaqsData(filteredData);
  };

  return (
    <AppContext.Provider
      value={{
        faqsData,
        handleAccordion,
        carouselData,
        isGetInTouchModalOpen,
        setIsGetInTouchModalOpen,
        isGetQuoteModalOpen,
        setIsGetQuoteModalOpen,
        isPostJobModalOpen,
        setIsPostJobModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
