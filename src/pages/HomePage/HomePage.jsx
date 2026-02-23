import './HomePage.css';

import like from '../../assets/like.png';
import fluentPerson from '../../assets/fluent-person.png';
import clockFast from '../../assets/clock-fast.png';

import success from '../../assets/success.png';
import message from '../../assets/message.png';
import search from '../../assets/search.png';
import wechat from '../../assets/wechat.png';
import santos from '../../assets/sowmya.jpeg';
import rita from '../../assets/vijaykumar.jpeg';
import successcopy from '../../assets/successcopy.png';

import video from '../../assets/SakSamSol.mp4';
import headerVideo from '../../assets/Saksam Sol.mp4';

import leftRectangle from '../../assets/right-rectangle (1).png';
import rightRectangle from '../../assets/right-rectangle (3).png';
import rectangle22 from '../../assets/rectangle22.png';
import ichorLogo from '../../assets/ichorLogo.jpeg';
import EQLogo from '../../assets/EQLogo.jpeg';
import FAQs from '../../assets/FAQs.jpg';

import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

import Accordion from '../../components/Accordion/Accordion';
import useAppContext from '../../context/AppContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { MdOutlinePlayCircle } from 'react-icons/md';
import { useEffect, useState } from 'react';
import PostJobModal from '../../components/Modals/PostJobModal/PostJobModal';
import GetInTouchModal from '../../components/Modals/GetInTouchModal/GetInTouchModal';
import { Link } from 'react-router-dom';
import { BiDollar } from 'react-icons/bi';

const data = [
  {
    id: 1,
    icon: like,
    title: 'Success That Speaks',
    text: 'We power your business growth with talent that delivers real results.',
  },
  {
    id: 2,
    icon: '',
    title: 'Value That Pays Off',
    text: 'Smart staffing solutions designed to save costs and maximize ROI.',
  },
  {
    id: 3,
    icon: clockFast,
    title: 'Speed You Can Trust',
    text: 'Fast hiring turnarounds without compromising on quality.',
  },
  {
    id: 4,
    icon: fluentPerson,
    title: 'Dedicated to Your Success',
    text: 'A committed team focused on seamless support and exceptional delivery.',
  },
];

const stepsData = [
  {
    id: 1,
    icon: success,
    title: 'Share Your Requirement',
  },
  {
    id: 2,
    icon: message,
    title: 'We Source the Best Talent',
  },
  {
    id: 3,
    icon: search,
    title: 'You Interview & Select',
  },
  {
    id: 4,
    icon: wechat,
    title: 'Smooth Onboarding',
  },
  {
    id: 5,
    icon: successcopy,
    title: 'Post Deployment Management',
  },
];

const testimonialsData = [
  {
    id: 1,
    text: 'Saksam Sol helped us close multiple niche positions within tight deadlines. Their process is smooth, transparent, and extremely professional. They understand exactly what the business needs and deliver candidates who fit perfectly.',
    name: 'Pravallika',
    role: 'HR Manager, a IT Services Firm',
  },
  {
    id: 2,
    text: 'With over 10 years of experience in recruitment and talent management, Raghu leads Saksam Sol with a vision to deliver quality staffing solutions across industries.',
    name: 'Amit Kumar',
    role: 'Founder & Managing Director, a Fintech Firm',
  },
  {
    id: 3,
    text: 'Sowmya brings expertise in operations and workforce strategy, ensuring seamless execution of recruitment processes and client satisfaction.',
    name: 'Kabir Singh',
    role: 'Co Founder & CHRO, a Manufacturing Firm',
  },
  {
    id: 4,
    text: 'Rajesh drives innovation through technology-driven recruitment solutions, optimizing sourcing, screening, and talent management workflows.',
    name: 'Ramya Ravali',
    role: 'Co Founder & COO, a Logistics Firm',
  },
  {
    id: 5,
    text: 'Saksam Sol helped us close multiple niche positions within tight deadlines. Their process is smooth, transparent, and extremely professional. They understand exactly what the business needs and deliver candidates who fit perfectly.',
    name: 'Rohit Sharma',
    role: 'HR Manager, a Software Firm',
  },
  {
    id: 6,
    text: 'With over 10 years of experience in recruitment and talent management, Raghu leads Saksam Sol with a vision to deliver quality staffing solutions across industries.',
    name: 'Mamata Sri',
    role: 'Founder & Managing Director, a Marketing Firm',
  },
  {
    id: 7,
    text: 'Sandeep brings expertise in operations and workforce strategy, ensuring seamless execution of recruitment processes and client satisfaction.',
    name: 'Sandeep K',
    role: 'Co Founder & CHRO, a Consultancy Firm',
  },
  {
    id: 8,
    text: 'Rajesh drives innovation through technology-driven recruitment solutions, optimizing sourcing, screening, and talent management workflows.',
    name: 'Rajesh Verma',
    role: 'Co Founder & COO, a IT Consultancy Firm',
  },
];

const meetingData = [
  {
    id: 2,
    image: santos,
    name: 'Sowmya K P',
    role: 'Partner | Leadership Team',
    text: 'Sowmya K P has 18 years of leadership experience in the staffing industry, with strong expertise in P&L management, revenue growth, and business operations. She has led organizations across recruitment, business, and marketing functions, giving her a well-rounded, end-to-end understanding of staffing operations.',
  },
  {
    id: 3,
    image: rita,
    name: 'Vijaykumar P',
    role: 'Partner | Leadership Team',
    text: 'Vijayakumar P brings over 25 years of rich experience in setting up and scaling Small and Medium Enterprises (SMEs), with deep expertise in financial advisory, consulting, and organizational transformation. He has played a pivotal role in establishing new businesses, designing robust Standard Operating Procedures (SOPs), and implementing innovative methods to improve overall company performance and operational efficiency.',
  },
];

const HomePage = () => {
  const {
    faqsData,
    handleAccordion,
    carouselData,
    isPostJobModalOpen,
    setIsPostJobModalOpen,
    isGetInTouchModalOpen,
    setIsGetInTouchModalOpen,
  } = useAppContext();
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='home-page-main-container'>
      <div className='home-page-header-wrapper'>
        <video
          className='background-video'
          src={headerVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className='video-overlay'></div>
        <div className='home-page-header-container'>
          <h1 className='home-page-heading'>
            India's most trusted talent power house{' '}
          </h1>
          <span className='headerline'>
            Building careers. Delivering talent. Powering growth for your
            business.
          </span>
        </div>
      </div>
      <div className='homepagebuttons'>
        <button
          className='homepagebutton'
          onClick={() => setIsPostJobModalOpen(!isPostJobModalOpen)}
        >
          Post a Job
        </button>

        <button className='homepagebutton'>
          <Link to='careers'>Apply a Job</Link>
        </button>
      </div>
      <div className='home-page-grid-container'>
        {data.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <div className='home-page-item-container' key={id}>
              {icon ? (
                <img src={icon} alt='icon' className='item-icon' />
              ) : (
                <div className='home-page-item-img-container'>
                  <BiDollar />
                </div>
              )}

              <h2 className='item-title'>{title}</h2>
              <p className='item-text'>{text}</p>
            </div>
          );
        })}
      </div>
      <div className='home-page-company-container'>
        <div>
          <p className='home-page-company-text'>Our Valued Hiring Partners </p>
          <p className='home-page-company-title'>
            A growing network of trusted partners who count on our expertise to
            scale their teams with speed and precision.
          </p>
        </div>
        <div className='home-page-company-logos-container'>
          <div className='home-page-company-logos-track'>
            <div className='home-page-company-logos-one-grid-container'>
              <img
                src='https://www.greatplacetowork.in/great/api/assets/uploads/9708/logo/logo.jpg'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://tse3.mm.bing.net/th/id/OIP.B86i8wYYoQOrm-KLUIpwDAHaBe?pid=Api&P=0&h=180'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://g.foolcdn.com/art/companylogos/square/prft.png'
                alt='company'
                className='company-img'
              />
              <img
                src='https://tse2.mm.bing.net/th/id/OIP.-mHDgxmP3V_YAJPUtgEKXwHaBO?pid=Api&P=0&h=180'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://dynamic.exportersindia.com/company_logo/6638845.jpg'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://tse1.mm.bing.net/th/id/OIP.SWQ9tBc7e6bwXye9FQc3jAHaEK?pid=Api&P=0&h=180'
                alt='company'
                className='grid-image'
              />
              <img src={EQLogo} alt='company' className='grid-image' />
              <img
                src='https://tse1.mm.bing.net/th/id/OIP.kDEaWkJlrgUwPL8jhoU0AgAAAA?pid=Api&P=0&h=180'
                alt='company'
                className='company-img'
              />
              <img
                src='https://nestaway-website-kkv4x6ba3-nestaway.vercel.app/images/logo.png'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/404/72ff0271081123.Y3JvcCw1NTMsNDMyLDYwMCwxOTE.jpg'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://companieslogo.com/img/orig/RCM_BIG-d0c11098.png?t=1602007417'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://av-eks-jobs.s3.amazonaws.com/media/company_logo/2019/10/17/saven_tech_M8j2lfO.jpeg'
                alt='company'
                className='grid-image'
              />
              <img src={ichorLogo} alt='company' className='grid-image' />
            </div>

            <div className='home-page-company-logos-one-grid-container'>
              <img
                src='https://www.greatplacetowork.in/great/api/assets/uploads/9708/logo/logo.jpg'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://tse3.mm.bing.net/th/id/OIP.B86i8wYYoQOrm-KLUIpwDAHaBe?pid=Api&P=0&h=180'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://g.foolcdn.com/art/companylogos/square/prft.png'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://tse2.mm.bing.net/th/id/OIP.-mHDgxmP3V_YAJPUtgEKXwHaBO?pid=Api&P=0&h=180'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://dynamic.exportersindia.com/company_logo/6638845.jpg'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://tse1.mm.bing.net/th/id/OIP.SWQ9tBc7e6bwXye9FQc3jAHaEK?pid=Api&P=0&h=180'
                alt='company'
                className='grid-image'
              />
              <img src={EQLogo} alt='company' className='grid-image' />
              <img
                src='https://tse1.mm.bing.net/th/id/OIP.kDEaWkJlrgUwPL8jhoU0AgAAAA?pid=Api&P=0&h=180'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://nestaway-website-kkv4x6ba3-nestaway.vercel.app/images/logo.png'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/404/72ff0271081123.Y3JvcCw1NTMsNDMyLDYwMCwxOTE.jpg'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://companieslogo.com/img/orig/RCM_BIG-d0c11098.png?t=1602007417'
                alt='company'
                className='grid-image'
              />
              <img
                src='https://av-eks-jobs.s3.amazonaws.com/media/company_logo/2019/10/17/saven_tech_M8j2lfO.jpeg'
                alt='company'
                className='grid-image'
              />
              <img src={ichorLogo} alt='company' className='grid-image' />
            </div>
          </div>
        </div>
      </div>
      <div className='home-page-how-it-works-section'>
        <h2 className='home-page-working-heading'>How It Works</h2>
        <div className='home-page-steps-grid-container'>
          {stepsData.map((step) => {
            const { id, icon, title } = step;
            return (
              <div className='home-page-step-container' key={id}>
                <p className='step'>Step {id}</p>
                <img src={icon} alt='icon' />
                <p className='step-title'>{title}</p>
              </div>
            );
          })}
        </div>
        <div className='howitoworksbuttons'>
          <button
            className='step-btn'
            onClick={() => setIsPostJobModalOpen(!isPostJobModalOpen)}
          >
            Post a Job
          </button>

          <button
            className='step-btn'
          >
            <Link to='careers'>Apply a Job</Link>
          </button>
        </div>
        <img
          src={leftRectangle}
          alt='left rectangle'
          className='left-rectangle'
        />
        <img
          src={rightRectangle}
          alt='left rectangle'
          className='right-rectangle'
        />
      </div>
      <div className='home-page-profile-container'>
        <div className='videocontent'>
          <h2>Powering Smarter Hiring. <br></br>Delivering Scalable Growth.</h2>
          <p>
            SaksamSol helps organizations hire faster, deploy smarter, and scale
            confidently through reliable end-to-end staffing solutions designed
            for performance and continuity.
          </p>
          <ul className='advantagespoints'>
            <li>Expert-led hiring backed by real-time market and skill intelligence</li>
            <li>Predictable hiring through plan-vs-actual tracking and milestone monitoring</li>
            <li>Additional candidate buffer to eliminate delivery risks</li>
            <li>Consistently low hire-loss rate below 10%, ensuring dependable workforce continuity</li>
          </ul>
        </div>
        <div
          className={
            playVideo
              ? 'home-page-profile-video play-video'
              : 'home-page-profile-video'
          }
        >
          <video controls width='100%' height='100%' autoPlay muted>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='home-page-services-container'>
        <div className='home-page-services-header'>
          <h3 className='home-page-services-heading'>
            Core Services For Everyone!
          </h3>
          <p className='home-page-services-text'>
            Choose A Service That Works Best For You
          </p>
        </div>
        <div className='home-page-services-grid-container'>
          <Slider {...settings}>
            {carouselData.map((item) => {
              const { id, title, list, link } = item;
              return (
                <div className='home-page-services-contract-container' key={id}>
                  <h3 className='home-page-contract-heading'>{title}</h3>
                  <ul className='home-page-contract-list-container'>
                    {list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <button className='contract-btn'>
                    <Link to={link}>Learn More</Link>
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className='mobile-home-page-services-grid-container'>
          <div className='mobile-home-page-services-group'>
            {carouselData.map((item) => {
              const { id, title, list, link } = item;
              return (
                <div className='home-page-services-contract-container' key={id}>
                  <h3 className='home-page-contract-heading'>{title}</h3>
                  <ul className='home-page-contract-list-container'>
                    {list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <button className='contract-btn'>
                    <Link to={link}>Learn More</Link>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <GetInTouchModal
        isOpen={isGetInTouchModalOpen}
        onClose={() => setIsGetInTouchModalOpen(false)}
      />
      <div className='home-page-testimonial-container'>
        <div className='home-page-testimonial-header'>
          <h2 className='testimonial-heading'>Testimonials</h2>
          <p className='testimonial-text'>
            Don’t just take our word for it, see what our clients have to say.
          </p>
        </div>
        <div className='home-page-testimonial-carousel-container'>
          <div className='testimonial-group'>
            {testimonialsData.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className='home-page-money-container'>
        <div className='home-page-money-content-container'>
          <h3 className='home-page-money-heading'>Our Success in Numbers </h3>
          <p className='home-page-money-text'>
            At Saksam Sol, our growth and impact are measured not just by the
            clients we serve but by the results we deliver. These numbers
            reflect our commitment to excellence, speed, and trust in the
            staffing industry.
          </p>
          <div className='howitoworksbuttons'>
            <button
              className='home-page-money-btn'
              onClick={() => setIsPostJobModalOpen(!isPostJobModalOpen)}
            >
              Post a Job
            </button>
            <button className='home-page-money-btn'>
              <Link to='careers'>Apply a Job</Link>
            </button>
          </div>
        </div>
        <div className='home-page-money-grid-container'>
          <div className='home-page-money-item-one-container'>
            <h3 className='item-one-heading'>500+</h3>
            <div className='item-one-range-container'>
              <div className='item-one-range-child-container'></div>
              <div className='item-one-range-point-container'></div>
            </div>
            <p className='item-one-text'>Successful Placements</p>
          </div>
          <div className='home-page-money-item-one-container'>
            <h3 className='item-one-heading'>95%</h3>
            <div className='item-one-range-container'>
              <div className='item-one-range-child-two-container'></div>
              <div className='item-one-range-point-container'></div>
            </div>
            <p className='item-one-text'>Client Satisfaction Rate</p>
          </div>
          <div className='home-page-money-item-two-container'>
            <h3 className='item-one-heading'>50+</h3>
            <p className='item-one-text'>Active Industry Clients</p>
          </div>
          <div className='home-page-money-item-three-container'>
            <h3 className='item-one-heading'>5+</h3>
            <p className='item-one-text'>Years of Experience</p>
          </div>
        </div>
        <img src={rectangle22} alt='rectangle 22' className='rectangle-22' />
      </div>
      <div className='home-page-faqs-container'>
        <div className='home-page-faqs-content-container'>
          <h3 className='faqs-heading'>Frequently Asked Questions</h3>
          <p className='faqs-text'>
            Helping you understand how Saksam Sol makes hiring seamless and
            efficient.
          </p>
          <img src={FAQs} alt='FAQ' />
        </div>
        <div className='home-page-faqs'>
          {faqsData.map((item) => (
            <Accordion
              key={item.id}
              {...item}
              handleAccordion={handleAccordion}
            />
          ))}
        </div>
      </div>
      <PostJobModal
        isOpen={isPostJobModalOpen}
        onClose={() => setIsPostJobModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;
