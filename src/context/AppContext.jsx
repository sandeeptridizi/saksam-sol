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
      'Depending on the role, we can deliver pre-screened candidates within days for urgent hiring and within weeks for niche positions.',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Do you handle compliance and payroll for contract staff?',
    answer:
      'Yes, we manage payroll, statutory compliance, and documentation for contingent and contract staffing, ensuring a hassle-free process.',
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
    title: 'Contigent Staffing',
    list: [
      'On-demand workforce support.',
      'Flexible contract durations.',
      'Quick deployment of skilled talent',
      'Compliance and payroll handled',
      'Ideal for project-based or peak workload needs',
    ],
  },
  {
    id: 2,
    title: 'Permanant Staffing',
    list: [
      'Focuses on delivering long-term employees who align with both skill expectations and organizational culture..',
      'Provides a structured hiring process with expert sourcing, screening, interviews, and final coordination.',
      'Uses strong industry networks to speed up closures across IT, Non-IT, and niche roles',
      'Dedicated recruiters for each domain.',
      'Strong talent pipeline for all industries.',
    ],
  },
  {
    id: 3,
    title: 'Recruitment Process Outsourcing',
    list: [
      'Provides a dedicated recruitment team that manages your full hiring cycle end-to-end.',
      'Improves hiring efficiency with scalable support for volume, niche, and multi-level recruitment.',
      'Reduces overall hiring costs through streamlined processes and consistent talent delivery.',
    ],
  },
  {
    id: 4,
    title: 'Bulk Hiring',
    list: [
      'On-demand workforce support.',
      'Flexible contract durations.',
      'Quick deployment of skilled talent',
      'Compliance and payroll handled',
      'Ideal for project-based or peak workload needs',
    ],
  },
  {
    id: 5,
    title: 'Payroll Services',
    list: [
      'On-demand workforce support.',
      'Flexible contract durations.',
      'Quick deployment of skilled talent',
      'Compliance and payroll handled',
      'Ideal for project-based or peak workload needs',
    ],
  },
];

export const AppContextProvider = ({ children }) => {
  const [faqsData, setfaqsData] = useState(faqs);
  const [isGetInTouchModalOpen, setIsGetInTouchModalOpen] = useState(false);
  const [isGetQuoteModalOpen, setIsGetQuoteModalOpen] = useState(false);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);

  const handleAccordion = (id) => {
    const filteredData = faqsData.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
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
