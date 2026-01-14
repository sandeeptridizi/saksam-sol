import './HomePage.css';

import like from '../../assets/like.png';
import euro from '../../assets/euro.png';
import fluentPerson from '../../assets/fluent-person.png';
import clockFast from '../../assets/clock-fast.png';

import library from '../../assets/library.png';
import monster from '../../assets/monster.png';
import indeed from '../../assets/indeed.png';
import totaljobs from '../../assets/totaljobs.png';
import glassdoor from '../../assets/glassdoor.png';
import jobcenterplus from '../../assets/jobcenterplus.png';
import adzuna from '../../assets/adzuna.png';
import trovit from '../../assets/trovit.png';
import jobsite from '../../assets/jobsite.png';
import reed from '../../assets/reed.png';
import success from '../../assets/success.png';
import message from '../../assets/message.png';
import search from '../../assets/search.png';
import wechat from '../../assets/wechat.png';
import logo from '../../assets/logo.png';
import alma from '../../assets/image1.jpg';
import santos from '../../assets/image2.jpg';
import rita from '../../assets/image3.jpg';
import layer from '../../assets/layer.png';
import group from '../../assets/group.png';
import leftRectangle from '../../assets/right-rectangle (1).png';
import rightRectangle from '../../assets/right-rectangle (3).png';
import rectangle22 from '../../assets/rectangle22.png';
import peter from '../../assets/peter.png';
import jacline from '../../assets/jacline.png';
import jessica from '../../assets/jessica.png';
import josh from '../../assets/josh.png';

import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import MeetingCard from '../../components/MeetingCard/MeetingCard';

import Accordion from '../../components/Accordion/Accordion';
import useAppContext from '../../context/AppContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const data = [
  {
    id: 1,
    icon: like,
    title: 'Success That Speaks',
    text: 'We power your business growth with talent that delivers real results.',
  },
  {
    id: 2,
    icon: euro,
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
];

const testimonialsData = [
  {
    id: 1,
    text: 'SakSam Sol helped us close multiple niche positions within tight deadlines. Their process is smooth, transparent, and extremely professional. They understand exactly what the business needs and deliver candidates who fit perfectly.',
    name: 'Rohit Sharma',
    role: 'HR Manager, IT Services Company',
    logo: logo,
  },
];

const meetingData = [
  {
    id: 1,
    image: alma,
    name: 'Raghavendra Chary',
    role: 'Founder & Managing Director',
    text: 'With over 10 years of experience in recruitment and talent management, Raghavendra leads SakSam Sol with a vision to deliver quality staffing solutions across industries.',
  },
  {
    id: 2,
    image: santos,
    name: 'Sowmya P',
    role: 'Co Founder & CHRO',
    text: 'Sowmya brings expertise in operations and workforce strategy, ensuring seamless execution of recruitment processes and client satisfaction.',
  },
  {
    id: 3,
    image: rita,
    name: 'Rajesh Verma',
    role: 'Co Founder & COO',
    text: 'Rajesh drives innovation through technology-driven recruitment solutions, optimizing sourcing, screening, and talent management workflows.',
  },
];

const HomePage = () => {
  const { faqsData, handleAccordion, carouselData } = useAppContext();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    dots: false,
    slidesToScroll: 1,
    speed: 500,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='home-page-main-container'>
      <div className='home-page-header-container'>
        <h1 className='home-page-heading'>
          Hyderabad’s Most Trusted Talent Powerhouse - We Hire, You Grow.
        </h1>
      </div>
      <div className='home-page-profile-container'>
        <img src={layer} alt='layer' className='layer-img' />
        <img src={group} alt='group' className='group-img' />
        <img src={peter} alt='peter' className='peter-img' />
        <img src={jacline} alt='jacline' className='jacline-img' />
        <img src={jessica} alt='jessica' className='jessica-img' />
        <img src={josh} alt='josh' className='josh-img' />
      </div>
      <div className='home-page-grid-container'>
        {data.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <div className='home-page-item-container' key={id}>
              <img src={icon} alt='icon' className='item-icon' />
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
          <div className='home-page-company-logos-one-grid-container'>
            <img src={library} alt='library' className='grid-image' />
            <img src={monster} alt='monster' className='grid-image' />
            <img src={indeed} alt='indeed' className='grid-image' />
            <img src={totaljobs} alt='totaljobs' className='grid-image' />
            <img src={glassdoor} alt='glassdoor' className='grid-image' />
          </div>
          <div className='home-page-company-logos-two-grid-container'>
            <img src={jobcenterplus} alt='library' className='grid-image' />
            <img src={adzuna} alt='monster' className='grid-image' />
            <img src={trovit} alt='indeed' className='grid-image' />
            <img src={jobsite} alt='totaljobs' className='grid-image' />
            <img src={reed} alt='glassdoor' className='grid-image' />
            <img src={jobcenterplus} alt='library' className='grid-image' />
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
        <button className='step-btn'>Post a Job</button>
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
              const { id, title, list } = item;
              return (
                <div className='home-page-services-contract-container' key={id}>
                  <h3 className='home-page-contract-heading'>{title}</h3>
                  <ul className='home-page-contract-list-container'>
                    {list.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <button className='contract-btn'>GET STARTED</button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className='home-page-testimonial-container'>
        <div className='home-page-testimonial-header'>
          <h2 className='testimonial-heading'>Testimonials</h2>
          <p className='testimonial-text'>
            Don’t take our word for it, see what our clients have to say.
          </p>
        </div>
        <div className='home-page-testimonial-carousel-container'>
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
          <TestimonialCard {...testimonialsData[0]} />
        </div>
      </div>
      <div className='home-page-money-container'>
        <div className='home-page-money-content-container'>
          <h3 className='home-page-money-heading'>Our Success in Numbers </h3>
          <p className='home-page-money-text'>
            At SakSam Sol, our growth and impact are measured not just by the
            clients we serve but by the results we deliver. These numbers
            reflect our commitment to excellence, speed, and trust in the
            staffing industry.
          </p>
          <button className='home-page-money-btn'>Post a Job</button>
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
      <div className='home-page-meeting-container'>
        <h3 className='home-page-meeting-heading'>Meet Our Team</h3>
        <p className='home-page-meeting-text'>
          Our Dedicated Team Is Always On Hand To Help Your Business Succeed. We
          Aim To Fill Your Roles Quickly And Efficiently.
        </p>
        <div className='home-page-meeting-grid-container'>
          {meetingData.map((item) => (
            <MeetingCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className='home-page-faqs-container'>
        <div className='home-page-faqs-content-container'>
          <h3 className='faqs-heading'>Frequently Asked Questions</h3>
          <p className='faqs-text'>
            Helping you understand how SakSam Sol makes hiring seamless and
            efficient.
          </p>
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
    </div>
  );
};

export default HomePage;
